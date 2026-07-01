#!/usr/bin/env python3
"""
Markdown 图片下载脚本：将文档中引用的远程图片下载到本地 images/ 目录，
直接用 md 文件名（去掉 .md 后缀）作为图片文件名前缀，按序号递增。

例如 vmware-failback-drill-reference-guide.md 的图片命名为：
  vmware-failback-drill-reference-guide-1.png
  vmware-failback-drill-reference-guide-2.png
  ...
"""

import os
import re
import sys

import requests


def process_md_file(md_path):
    if not os.path.isfile(md_path):
        print(f"Error: file not found - {md_path}")
        return

    # 用文件名（去掉 .md）作为图片前缀
    base_name = os.path.splitext(os.path.basename(md_path))[0]

    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    base_dir = os.path.dirname(md_path)
    image_dir = os.path.join(base_dir, "images")
    os.makedirs(image_dir, exist_ok=True)

    image_counter = 1
    url_cache = {}  # 同一 URL 不重复下载
    new_lines = []

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}

    for line in lines:
        img_match = re.search(r'!\[[^\]]*\]\((http.*?)\)', line)
        if img_match:
            img_url = img_match.group(1)

            # URL 缓存：同一 URL 不重复下载
            if img_url in url_cache:
                rel_path = url_cache[img_url]
                line = re.sub(r'!\[[^\]]*\]\(http.*?\)', f"![Image]({rel_path})", line)
                new_lines.append(line)
                continue

            filename = f"{base_name}-{image_counter}.png"

            local_path = os.path.join(image_dir, filename)

            try:
                res = requests.get(img_url, timeout=10, headers=headers)
                res.raise_for_status()
                with open(local_path, 'wb') as f:
                    f.write(res.content)
                # 只有下载成功才替换路径和递增序号
                rel_path = f"./images/{filename}"
                url_cache[img_url] = rel_path
                image_counter += 1
                line = re.sub(r'!\[[^\]]*\]\(http.*?\)', f"![Image]({rel_path})", line)
                print(f"✅ Downloaded: {filename}")
            except Exception as e:
                print(f"❌ Failed to download: {img_url} - {e}")
                # 下载失败，保留原远程 URL，不递增序号

        new_lines.append(line)

    with open(md_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print(f"\n🎉 Finished processing: {md_path}")
    print(f"📁 Images saved to: {image_dir}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python images_download.py <markdown_file_path>")
    else:
        md_file_path = sys.argv[1]
        process_md_file(md_file_path)
