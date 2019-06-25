const wialon = require('./wialon/wialon');
const fs = require("fs");
let file = fs.readFileSync("data.txt", "utf8");
console.log(wialon.GetImei(file)); //Возвращает последний вошедший imei
console.log(wialon.GetCoordsArray(file)); //возвращает массив из всех обработанных координат
console.log(wialon.GetSpeedArray(file)); //Возвращает массив обработанной скорости
console.log(wialon.GetCourseArray(file)); // Массив курса
