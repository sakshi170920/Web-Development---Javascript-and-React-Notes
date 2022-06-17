let now = new Date();
console.log(now);

//get month , day, year , time
console.log("getFullYear : ",now.getFullYear());
console.log("getMonth : ",now.getMonth());
console.log("getDay : ",now.getDay());
console.log("getDate : ",now.getDate());

console.log("getHours: ",now.getHours());
console.log("getMinutes : ",now.getMinutes());
console.log("getSeconds : ",now.getSeconds());

//timestamp millisceoncds passed from 12:00 am 1 jan 1970 till today
console.log("getTimestamp : ",now.getTime());

//get strings
console.log("getDateString : ",now.toDateString());
console.log("getTimeString : ",now.toTimeString());
console.log("getLocaleString : ",now.toLocaleString());

//Timestamps and Comparisons

const before = new Date('Sat Apr 2 2021 01:46:28');
const now_ = new Date();
console.log(now_.getTime(),before.getTime());

//calculate diff in sec , min , hours , day
let diff = now_.getTime() - before.getTime();
let sec = Math.round(diff/1000);
console.log("Difference in seconds",sec);
let min = Math.round(sec/60);
console.log("Difference in minutes",min);
let hours = Math.round(min/60);
console.log("Difference in hours",hours);
let days = Math.round(hours/24);
console.log("Difference in days",days);






