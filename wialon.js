module.exports.get = function(str){
  let data = {
    date: [],
    time: [],
    lat1: [],
    lat2: [],
    lon1: [],
    lon2:[],
    course: [],
    imei:[]
  }
  let s;
  let j = -1;
  str = str.split('\n');
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'L'){
      j++;
      s[0] = s[0].substring(3);
      data.imei[j] = s[0];
    } else {
      s[0] = s[0].substring(3);
      data.date[j] = s[0];
      data.time[j] = s[1];
      data.lat1[j] = s[2];
      data.lat2[j] = s[3];
      data.lon1[j] = s[4];
      data.lon2[j] = s[5];
      data.course[j] = s[7];
    }
  }
  return data;
};
module.exports.getbus = function(str,imei){
  let data = {
    date:'',
    time:'',
    lat1:'',
    lat2:'',
    lon1:'',
    lon2:'',
    course:''
  }
  let s;
  let im;
  str = str.split('\n');
  for (let i=0; i<str.length; i++){
    s = str[i].split(';');
    if (s[0][1] == 'L'){
      s[0] = s[0].substring(3);
      im = s[0];
    } else {
      if (im == imei){
        s[0] = s[0].substring(3);
        data.date = s[0];
        data.time = s[1];
        data.lat1 = s[2];
        data.lat2 = s[3];
        data.lon1 = s[4];
        data.lon2 = s[5];
        data.course = s[7];
      }
    }
  }
  return data;
}
