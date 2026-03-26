// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write("Hello Shaon, this is Node.js server!");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1>Hello Shaon!</h1>");
  res.write("<p>This is HTML response from Node.js server.</p>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});