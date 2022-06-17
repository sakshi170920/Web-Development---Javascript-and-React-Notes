let a = 'sakshi' , b = 'oswal';
//concat
// lect c = a+b; won't work
let c = a + ' ' + b;
console.log(c);

//access eleemnts
console.log(c[2]);

//length
console.log(c.length);

//methods 
console.log(c.toUpperCase());
//functions perform a specific task , methods are special kind of func which are associated with an object

console.log(c.indexOf('a'));
console.log(c.lastIndexOf('a'));
let x = 5 , y = 10;
console.log(c.slice(x,y));//starts from x and goes upto (y-1)
console.log(c.substr(x,y));//starts from x and gets next y characters i.e from x to x+y 
console.log(c.replace('sa','z'));//replaces only first occurence of x with y

//TEMPLATE STRINGS

//normal concat
let author = 'Xyz' , title = 'book Z' ,likes = 60;
let result = 'The book named '+title+" by "+ author+" "+ ' '+'has '+likes+" likes";
console.log(result);

//template string way
result = `The book named ${title} by ${author} has ${likes} likes.`;
console.log(result);

//create html template
let html = `
<h2>${title}</h2>
<p> by ${author}</p><span>has ${likes} likes</span>
`;
console.log(html);