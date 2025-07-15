const fs = require('fs');
const path = require('path');
const mime = require('mime-types');  // 用来检查文件是否为图片

// ✅ 配置：指定所有需要处理的 README-build.md 文件路径（相对于项目根目录）
const buildFiles = [
  'src/zh/userguide/admin-portal/README-build.md',
  'src/zh/userguide/dr/README-build.md',
  'src/zh/userguide/migration/README-build.md',
  'src/zh/userguide/om-guide/README-build.md',
  'src/userguide/admin-portal/README-build.md',
  'src/userguide/dr/README-build.md',
  'src/userguide/migration/README-build.md',
  'src/userguide/om-guide/README-build.md',
  // 可继续添加其他路径
];

// 降级标题：# => ## 最多降到 ###### (6级)
function downgradeHeadings(content, level = 1) {
  return content.replace(/^(\s*)(#{1,6})(?=\s)/gm, (match, space, hashes) => {
    const newLevel = Math.min(hashes.length + level, 6);
    return space + '#'.repeat(newLevel);
  });
}

// 确保目录存在（递归创建）
function ensureDirExist(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 递归处理 @include
function processIncludes(filePath, level = 1, visited = new Set()) {
  if (visited.has(filePath)) {
    console.warn(`⚠️ 循环引用检测到，跳过文件：${filePath}`);
    return '';
  }
  visited.add(filePath);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ 文件不存在：${filePath}`);
    return `<!-- File not found: ${filePath} -->`;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const dir = path.dirname(filePath);

  const includeRegex = /<!--\s*@include:\s*(.+?)\s*-->/g;

  const result = raw.replace(includeRegex, (match, relativeIncludePath) => {
    const includeFullPath = path.resolve(dir, relativeIncludePath.trim());
    const includedContent = processIncludes(includeFullPath, level + 1, visited);
    return downgradeHeadings(includedContent, 1);
  });

  return result;
}

// 复制图片文件（只复制图片类型文件）
function copyImages(sourceDir, targetDir) {
  const sourceImagesDir = path.join(sourceDir, 'images');
  const targetImagesDir = path.join(targetDir, 'images');

  if (fs.existsSync(sourceImagesDir)) {
    ensureDirExist(targetImagesDir);  // 确保目标 images 文件夹存在

    const files = fs.readdirSync(sourceImagesDir);
    files.forEach((file) => {
      const filePath = path.join(sourceImagesDir, file);
      const mimeType = mime.lookup(filePath);

      console.log(`检查文件：${filePath} 类型：${mimeType}`);  // 添加日志输出

      // 只复制图片文件
      if (mimeType && mimeType.startsWith('image/')) {
        const targetFilePath = path.join(targetImagesDir, file);
        ensureDirExist(path.dirname(targetFilePath));  // 确保目标文件夹存在
        fs.copyFileSync(filePath, targetFilePath);
        console.log(`✅ 图片已复制：${file}`);  // 确认复制
      } else {
        console.log(`⚠️ 非图片文件跳过：${file}`);  // 输出非图片文件
      }
    });
  } else {
    console.log(`⚠️ 未找到 images 文件夹：${sourceImagesDir}`);
  }
}

// 主执行逻辑
for (const buildFileRelative of buildFiles) {
  const buildFilePath = path.resolve(__dirname, '..', buildFileRelative);

  if (!fs.existsSync(buildFilePath)) {
    console.warn(`⚠️ 构建源文件不存在，跳过：${buildFilePath}`);
    continue;
  }

  const outputFilePath = buildFilePath.replace(/README-build\.md$/, 'README.md');
  const outputDir = path.dirname(outputFilePath);

  // 处理包含内容并写入目标文件
  console.log(`🔧 构建中：${buildFilePath}`);
  const finalContent = processIncludes(buildFilePath);
  fs.writeFileSync(outputFilePath, finalContent, 'utf-8');
  console.log(`✅ 写入处理结果到：${outputFilePath}`);

  // 复制 images 文件夹中的图片到目标目录
  copyImages(path.dirname(buildFilePath), outputDir);

  // 查找所有 @include 引用的文件，并复制它们的 images 文件夹
  const raw = fs.readFileSync(buildFilePath, 'utf-8');
  const includeRegex = /<!--\s*@include:\s*(.+?)\s*-->/g;
  let match;
  while ((match = includeRegex.exec(raw)) !== null) {
    const includedFilePath = path.resolve(path.dirname(buildFilePath), match[1].trim());
    copyImages(path.dirname(includedFilePath), outputDir); // 针对每个包含文件的目录复制图片
  }
}
