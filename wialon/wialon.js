const os = require('os');
module.exports = {
GetImei: function(str){
  str = str.split(os.EOL);
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'L')
      imei = s[0].substring(3)
  }
  return imei;
},
GetCoords: function(str){
  str = str.split(os.EOL);
  let coords = {};
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'D'){
      coords.lat1 = s[2];
      coords.lat2 = s[3];
      coords.lon1 = s[4];
      coords.lon2 = s[5];
    };
  };
  return coords;
},
GetSpeed: function(str){
  str = str.split(os.EOL);
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'D')
      speed = s[6]
  };
  return speed;
},
GetCourse: function(str){
  str = str.split(os.EOL);
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'D')
      course = s[7]
  };
  return course;
}};
