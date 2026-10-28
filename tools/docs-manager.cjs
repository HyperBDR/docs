const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const buildFiles = [
  'src/zh/userguide/admin-portal/README-build.md',
  'src/zh/userguide/dr/README-build.md',
  'src/zh/userguide/migration/README-build.md',
  'src/zh/userguide/om-guide/README-build.md',
  'src/userguide/admin-portal/README-build.md',
  'src/userguide/dr/README-build.md',
  'src/userguide/migration/README-build.md',
  'src/userguide/om-guide/README-build.md',
];

const args = process.argv.slice(2);
const isClean = args.includes('--clean');
const isBuild = args.includes('--build');
const isVerbose = args.includes('--a') || args.includes('-a');

function log(...messages) {
  if (isVerbose) {
    console.log(...messages);
  }
}

function downgradeHeadings(content, level = 2) {
  return content.replace(/^([ \t]*)(#{1,6})(?=\s)/gm, (match, space, hashes) => {
    const newLevel = Math.min(hashes.length + level, 6);
    return space + '#'.repeat(newLevel);
  });
}

// 关键函数，去掉一个 ../
function fixRelativeLinks(content) {
  return content.replace(
    /(!?\[.*?\])\(\s*(\.\.\/+)([^\)]*)\)/g,
    (match, bracket, prefix, rest) => {
      const newPrefix = prefix.replace(/^\.\.\//, '');
      if (newPrefix === '') {
        return `${bracket}(./${rest})`;
      } else {
        return `${bracket}(${newPrefix}${rest})`;
      }
    }
  );
}

function ensureDirExist(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function processIncludes(filePath, level = 2, visited = new Set()) {
  if (visited.has(filePath)) {
    log(`⚠️ 循环引用检测到，跳过文件：${filePath}`);
    return '';
  }
  visited.add(filePath);

  if (!fs.existsSync(filePath)) {
    log(`⚠️ 文件不存在：${filePath}`);
    return `<!-- File not found: ${filePath} -->`;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const dir = path.dirname(filePath);
  const includeRegex = /<!--\s*@include:\s*(.+?)\s*-->/g;

  const result = raw.replace(includeRegex, (match, relativeIncludePath) => {
    const includeFullPath = path.resolve(dir, relativeIncludePath.trim());
    const includedContent = processIncludes(includeFullPath, level + 1, visited);
    return downgradeHeadings(includedContent, 2);
  });

  return fixRelativeLinks(result);
}

function copyImages(sourceDir, targetDir) {
  const sourceImagesDir = path.join(sourceDir, 'images');
  const targetImagesDir = path.join(targetDir, 'images');

  if (!fs.existsSync(sourceImagesDir)) {
    log(`⚠️ 未找到 images 文件夹：${sourceImagesDir}`);
    return;
  }

  if (!fs.existsSync(targetImagesDir)) {
    fs.mkdirSync(targetImagesDir, { recursive: true });
    log(`✅ 创建了目标文件夹：${targetImagesDir}`);
  }

  const files = fs.readdirSync(sourceImagesDir);
  files.forEach((file) => {
    const filePath = path.join(sourceImagesDir, file);
    const mimeType = mime.lookup(filePath);

    log(`检查文件：${filePath} 类型：${mimeType}`);

    if (mimeType && mimeType.startsWith('image/')) {
      const targetFilePath = path.join(targetImagesDir, file);
      ensureDirExist(targetFilePath);
      fs.copyFileSync(filePath, targetFilePath);
      log(`✅ 图片已复制：${file}`);
    } else {
      log(`⚠️ 非图片文件跳过：${file}`);
    }
  });
}

function cleanGeneratedContent() {
  buildFiles.forEach((buildFileRelative) => {
    const buildFilePath = path.resolve(__dirname, '..', buildFileRelative);
    const outputFilePath = buildFilePath.replace(/README-build\.md$/, 'README.md');
    const outputDir = path.dirname(outputFilePath);
    const imagesDir = path.join(outputDir, 'images');

    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
      log(`✅ 删除了文件：${outputFilePath}`);
    }

    if (fs.existsSync(imagesDir)) {
      fs.rmdirSync(imagesDir, { recursive: true });
      log(`✅ 删除了文件夹：${imagesDir}`);
    }
  });
}

if (isClean) {
  log('🔴 清理生成的内容...');
  cleanGeneratedContent();
} else if (isBuild) {
  log('🟢 执行构建操作...');
  buildFiles.forEach((buildFileRelative) => {
    const buildFilePath = path.resolve(__dirname, '..', buildFileRelative);

    if (!fs.existsSync(buildFilePath)) {
      log(`⚠️ 构建源文件不存在，跳过：${buildFilePath}`);
      return;
    }

    const outputFilePath = buildFilePath.replace(/README-build\.md$/, 'README.md');
    const outputDir = path.dirname(outputFilePath);

    log(`🔧 构建中：${buildFilePath}`);
    const finalContent = processIncludes(buildFilePath);
    fs.writeFileSync(outputFilePath, finalContent, 'utf-8');
    log(`✅ 写入处理结果到：${outputFilePath}`);

    copyImages(path.dirname(buildFilePath), outputDir);

    const raw = fs.readFileSync(buildFilePath, 'utf-8');
    const includeRegex = /<!--\s*@include:\s*(.+?)\s*-->/g;
    let match;
    while ((match = includeRegex.exec(raw)) !== null) {
      const includedFilePath = path.resolve(path.dirname(buildFilePath), match[1].trim());
      copyImages(path.dirname(includedFilePath), outputDir);
    }
  });
} else {
  console.log('❓ 请提供 --build 或 --clean 参数');
}
