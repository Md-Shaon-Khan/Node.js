const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const user = {
    name: "Shaon",
    age: 22,
    email: "Shaon@gmail.com"
  };

  res.end(JSON.stringify(user));
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});