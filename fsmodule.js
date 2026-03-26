// const fs = require('fs');

// fs.readFile('second.js', 'utf8', (err, data) => {
//   if (err) {
//     console.log("Error: ", err);
//     return;
//   }
//   console.log("File Data: ", data);
// });

// console.log("This runs fast");

// const data = fs.readFileSync('second.js', 'utf8');
// console.log(data);

// console.log("This runs after reading...");


// const fs = require('fs');

// fs.writeFile('check.txt', 'New Content is written here...', (err) => {
//   if (err) {
//     console.log("Error: ", err);
//     return;
//   }
//   console.log("File written Successfully...");
// });

// fs.appendFile('check.txt', '\nHere the new line added', (arr) => {
//   if (arr) {
//     console.log(arr);
//     return;
//   }
//   console.log('Data appended.');
// });

// fs.unlink('check.txt', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('File deleted');
// });

// fs.mkdir('myFolder', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Folder Created...');
// });


// const fs = require('fs')

// const user = {
//   name: "Shaon",
//   age: 22
// };

// fs.writeFileSync('user.json', JSON.stringify(user));

// const data = fs.readFileSync("user.json", 'utf8');
// const parsed = JSON.parse(data);

// console.log(parsed);


// const fs = require('fs');

// if (fs.existsSync('user.json')) {
//   console.log('File exits');
// } else {
//   console.log("File not found.");
// }


const fs = require('fs');

fs.rename('user.json', 'USER.txt', (err) => {
  if (err) throw err;
  console.log('File Renamed.');
});