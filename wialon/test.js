const wialon = require('./wialon');
const fs = require("fs");
let file = fs.readFileSync("C:/Users/апа/Desktop/wialon-dev/wialon/data.txt", "utf8");
console.log(wialon.getBus(file,'352848029853266'));
