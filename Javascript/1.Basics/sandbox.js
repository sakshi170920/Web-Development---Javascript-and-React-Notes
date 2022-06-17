// print on console
console.log("heyyyyyyyyyyy");
console.log(22);
//variable declaration and initialization
let age_ = 20 , year = 2021 ;
console.log(age_,year);

age_ = 30;

const points = 33;
console.log(points);

// points = 54; gives error

var m = 23;//not used aajkal
// Data Types : Number , String , boolean , Null(explicityl tell no value) , Undefined(for variables that are not yet defined)
// Object(Complex data struct - arrays , dates , literals) , symbols (used with objects)

//numbers
let radius = 10 , rad = 10.2 ;
const pi = 3.14;
console.log(radius/2);
console.log(11/2.0);
console.log(rad/2);
console.log(rad%2);

console.log(pi*radius**2);
radius*=2;
console.log(radius);
//order of operation B I(power) D M A S

console.log(5/0); // returns Infinity
console.log(5*'hey'); //NaN not a number

console.log("The blog has "+radius+" likes");

//NULL & Undefined

let age , age1 = null;
console.log(age,age+3,`age is ${age}`); //undefined NaN "age is undefined"

console.log(age1,age1+3,`age is ${age1}`); //null 3 "age is null"
//here age being null takes value as 0 for age1+3

//**********************Primitives and Reference Types***************************/
// Primitive                                                   Reference types

//1.Numbers , strings , booleans                            1.All types of object , object literals
// , symbols , null & undefined                            , arrays,  arrays , funcs , dates , etc

// 2.Primitive types are stored on stack                       2.Reference types stored on Heap (names = ['a','b']) the array is stored
//                                                            on heap and pointer to array stored on stack where 
//                                                            variable name: names linked to pointer of referenced object

// 3. When you make a copy of another primitve type            3. When we make copy ,the pointer still points to same object on stack
// change in one doesnt affect another                         , so change in object ill reflect in both the variables objects 
console.log("primitve vs reference types");

let var1 = 2;
let var2 = var1;
var1 = 3;
console.log(var2);

let var3 = [2,3,4];
let var4 = var3;
var3[1] = 6;
console.log(var4);