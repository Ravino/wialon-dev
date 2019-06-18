const wialon = require('./wialon');
const fs = require("fs");
let file = fs.readFileSync("data.txt", "utf8");
console.log(wialon.GetImei(file));
console.log(wialon.GetCoords(file));
console.log(wialon.GetSpeed(file));
console.log(wialon.GetCourse(file));
