const fs = require("fs");
const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.send("Server created 🙌");
});

server.listen(PORT, () => {
  console.log("Server listen on port '3001'...");
});
