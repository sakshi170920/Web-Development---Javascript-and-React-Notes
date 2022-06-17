

let result3 = [20,30,50].includes(40);
console.log(result3);

let result4 = 'sakshi@34FFGG'.includes('@');
console.log(result4);

console.log(30 != 40);

let a = 'sakshi';
console.log(a == 'sakshi')//true
console.log(a == 'Sakshi')//false
console.log(a > 'Sakshi')//true
console.log("loose comaprison");
//LOOSE COMPARISON (diff types can still be equal)
let x = 25;
console.log(x == 25);//true
console.log(x == '25');//true , bcoz x and '25' has different data types it first convert 25 to a number and then compares it so true
console.log(x != 25);//false
console.log(x != '25');//false

//STRICT COMPARISON (diff types cannot be equal)
console.log("strict comaprison");
console.log(x === 25);//true
console.log(x === '25');//false
console.log(x !== 25);//false
console.log(x !== '25');//true

//Type Conversion
let score = "100";
//Implicit Type Conversion , JS converts stuff behind the scenes
console.log(score+1); //1001 bcoz it converts 1 to a string and then concat performed
console.log(typeof score);

//Explicit Type Conversion
score = Number(score);
console.log(score+1); //101 result

let no = Number('hey');
console.log(no);//NaN bcoz cant convert string to a number

let str = String(50);
console.log(str , typeof str);





