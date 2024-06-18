// https://github.com/marioterron/node-exercises
// 2. Show Content
// Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

// node app.js test.txt

// Hint: You need npm module - fs

const fs = require('node:fs');

try {
  let path = process.argv[2] ?? './text.txt';

  fs.readFile(path, 'utf-8', (err, text) => {
    console.log('content in the file', text);
  });
} catch (error) {
  process.exit(1);
}
