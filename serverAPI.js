const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  res.json({
    name: "Shaon Khan",
    age: 22,
    skill: "Node.js"
  });
});

app.listen(3000, () => {
  console.log("Express API server running at http://localhost:3000");
});