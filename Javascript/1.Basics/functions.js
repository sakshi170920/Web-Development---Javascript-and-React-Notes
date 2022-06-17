//functions are of data type object in js
greet();//functions are kept at top , so can be called anywhere before & after declaration
function greet()
{
    console.log("hello");
}
greet();
//speak(); //function expression cannot be called before declaration

//******************************Function expression*************************
const speak = function(){
    console.log("heya");
}
speak();

//1. Function expressions in JavaScript are not hoisted unlike function declarations

//2. Named function expression
// If you want to refer to the current function inside the function body, 
// you need to create a named function expression. This name is then local only to the function body (scope).
//  This also avoids using the non-standard arguments.callee property.

let math = {
  'factit': function factorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;

// 3. More commonly it is used as a callback:

// button.addEventListener('click', function(event) {
//     console.log('button is clicked!')
// })

//4. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. 

function foo(name ,time='morning', x = 'xyz')//no order for default & normal paramters
{
    console.log(name,time,x);
}
foo('d');//d is assigned to time

function test(num = 1) {
    console.log(typeof num)
  }
  
  test()           // 'number' (num is set to 1)
  test(undefined)  // 'number' (num is set to 1 too)

//   function f(a = go()) { // Throws a `ReferenceError` when `f` is invoked.
//     function go() { return ':P' }
//   }
// this function will print undefined because variable 
// var a is hoisted only to the top of the scope created for the function body
//  (and not the parent scope created for the parameter list):
  
//   function f(a, b = () => console.log(a)) {
//     var a = 1
//     b() // Prints `undefined`, because default parameter values exist in their own scope
//   }

// Parameters without defaults after default parameters
// Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

function f(x = 1, y) {
  return [x, y]
}

f()   // [1, undefined]
f(2)  // [2, undefined]
// Destructured parameter with default value assignment
// You can use default value assignment with the destructuring assignment notation:

function fx([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z
}

console.log( fx() );

//*****************************************Arrow Function*****************************************

//for more lines of code
const dummy = (num) => {
    console.log("inside arrow func");
    return num*2;
}
console.log(dummy(5));

// 1 Line of Code , when only one argument you can skip parenthesis and return keyword
const dummy1 = num =>  num*2;

console.log(dummy1(6));

//methods are functions which are associated with an object and invoked using . operator

//*****************************************CallBack Function*****************************************
// when we pass a function1 as argument to an another function2 then function1 is called a Callback function

const funct1 = (callbackFunc) => {
    let x = 'sakshi';
    callbackFunc(x);
}
const callbackFunc = x => { //separately defining callback elsewhere
    console.log(x);
};

funct1(callbackFunc);

//*****************************************For each*****************************************
let people = ['sakshi','john','oswal','ken'];

people.forEach( (person,index) => { //defining callback func anonylmously while calling
    console.log(person," is at index : ", index);
});