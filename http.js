const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<html> <title>Hellow world </title><head> </head>  <body> <input /> </body> </html> `
    );

    res.end();
  } else if (req.url === "/about") {
    res.write("this is about page");
    res.end();
  } else {
    res.write("page not found");
    res.end();
  }
});

myServer.listen(3000);
