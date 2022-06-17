// https://date-fns.org/

const now = new Date();

console.log(dateFns.format(now , 'YYYY'));
console.log(dateFns.format(now , 'MMMM'));
console.log(dateFns.format(now , 'Do'));
console.log(dateFns.format(now , 'MM'));

const before = new Date(50405050345);
console.log(dateFns.distanceInWords(now , before));