// https://github.com/marioterron/node-exercises
// ##4. File list

// Write a node.JS program that list the content of the current directory indicating if is a directory or a file

const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(folder) {
  let files;
  try {
    console.log('folder', folder)
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(`❌ No se pudo leer el directorio ${folder}`);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);

    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'dir' : 'file';
    const fileSize = stats.size.toString();
    return `${fileType} ${file.padEnd(20)} ${fileSize}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder)

//examples
// node fileList.js ../0-calculator
// node fileList.js ../
