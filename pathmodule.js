const path = require('path');

const filePath = path.join('folder', 'students', 'data.txt');

console.log(filePath);

const file = path.basename('./home/user/test.js');
console.log(file);

const ext = path.extname('/home/shaon/frontend/index.html');
console.log(ext);

const fullPath = path.resolve('pathmodule.js');
console.log(fullPath);

const pathDir = path.dirname('C:\\temp\\hello.html');
console.log(pathDir);