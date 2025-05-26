import os
import re
import sys
import requests
from googletrans import Translator

translator = Translator()

def translate(text):
    try:
        result = translator.translate(text, src='zh-cn', dest='en')
        # 取翻译后的文本，去掉空格，做简单处理适合文件名
        return re.sub(r'\s+', '', result.text)
    except Exception as e:
        print(f"⚠️ 翻译失败，使用原文: {text}，错误: {e}")

def sanitize(text):
    text = re.sub(r'[^\w\-]', '_', text)
    return text.strip('_')

def process_md_file(md_path):
    if not os.path.isfile(md_path):
        print(f"Error: file not found - {md_path}")
        return

    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    base_dir = os.path.dirname(md_path)
    image_dir = os.path.join(base_dir, "images")
    os.makedirs(image_dir, exist_ok=True)

    current_h1 = ''
    current_h2 = ''
    image_counter = {}
    new_lines = []

    for line in lines:
        h1 = re.match(r'^# (.+)', line)
        h2 = re.match(r'^## (.+)', line)

        if h1:
            current_h1 = sanitize(translate(h1.group(1)))
            current_h2 = ''
            new_lines.append(line)
            continue

        if h2:
            current_h2 = sanitize(translate(h2.group(1)))
            new_lines.append(line)
            continue

        img_match = re.search(r'!\[\]\((http.*?)\)', line)
        if img_match:
            img_url = img_match.group(1)

            title_parts = [current_h1.lower()]
            if current_h2:
                title_parts.append(current_h2.lower())
            base_name = '-'.join(title_parts)

            count = image_counter.get(base_name, 1)
            filename = f"{base_name}-{count}.png"
            image_counter[base_name] = count + 1

            local_path = os.path.join(image_dir, filename)

            try:

                res = requests.get(img_url, timeout=10)
                res.raise_for_status()
                with open(local_path, 'wb') as f:
                    f.write(res.content)
                print(f"✅ Downloaded: {filename}")
            except Exception as e:
                print(f"❌ Failed to download: {img_url} - {e}")

            rel_path = f"./images/{filename}"
            line = re.sub(r'!\[\]\(http.*?\)', f"![]({rel_path})", line)

        new_lines.append(line)

    with open(md_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print(f"\n🎉 Finished processing: {md_path}")
    print(f"📁 Images saved to: {image_dir}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python download_md_images.py <markdown_file_path>")
    else:
        md_file_path = sys.argv[1]
        process_md_file(md_file_path)
