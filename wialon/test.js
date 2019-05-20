const wialon = require('./wialon');
const fs = require("fs");
let file = fs.readFileSync("data.txt", "utf8");
console.log(wialon.get(file).lon1);
console.log(wialon.getBus(file,'352848029853261').course);
