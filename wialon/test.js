const wialon = require('./wialon');
const fs = require("fs");
let file = fs.readFileSync("data.txt", "utf8");
console.log(wialon.GetImei(file));
console.log(wialon.GetCoordsArray(file));
console.log(wialon.GetSpeedArray(file));
console.log(wialon.GetCourseArray(file));
