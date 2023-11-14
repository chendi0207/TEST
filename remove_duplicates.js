const fs = require('fs');

function removeDuplicates(inputFile, outputFile) {
  // 读取输入文件中的内容
  const content = fs.readFileSync(inputFile, 'utf8');

  // 解析JSON内容
  const data = JSON.parse(content);

  // 去重操作
  const uniqueUrls = [];
  const uniqueData = [];
  data.urls.forEach((item) => {
    if (!uniqueUrls.includes(item.url)) {
      uniqueUrls.push(item.url);
      uniqueData.push(item);
    }
  });

  // 将结果保存到输出文件中
  fs.writeFileSync(outputFile, JSON.stringify({ urls: uniqueData }, null, 2), 'utf8');
}

// 从命令行参数获取输入和输出文件路径
const inputFile = process.argv[2];
const outputFile = process.argv[3];

// 执行去重操作并保存结果
removeDuplicates(inputFile, outputFile);
