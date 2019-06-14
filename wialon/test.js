const wialon = require('./wialon');
const fs = require("fs");
let file = fs.readFileSync("C:/Users/апа/Desktop/wialon-dev/data.txt", "utf8");
console.log(wialon.get(file));
