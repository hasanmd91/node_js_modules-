const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/myfile.text`, "utf8");

ourReadStream.on("data", (chunk) => {
  console.log(chunk);
});
