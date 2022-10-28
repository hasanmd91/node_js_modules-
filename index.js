"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hellow programmers ");
    res.write("how are you doing ");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page ");
    res.end();
  } else {
    res.write("not found");
    res.end();
  }
});
server.listen(3001);

console.log("listening on port 3000");
