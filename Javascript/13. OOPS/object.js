
//We can create a new object using new keyword

const names = new Array("xx","yy","zz")
console.log(names);

// (3) ["xx", "yy", "zz"]
//     0: "xx"
//     1: "yy"
//     2: "zz"
//     length: 3
//     __proto__: Array(0) : proto contains all functions

let name = 'mario'
console.log(name);

//mario

/**You will notice that Javascript is not fully oop language , it has primitive
 * data type like string , nmber , etc but we can use methods on this primitve datatypes like
 * name.length , name,toUpperCase , this is bocz everytime javascript wraps a primitvie data type 
 * to an appropriate boject i.e String object here and then we can use those metohds for us .
 * 
 * So not everything is an object , but everythin can behave like one !
 */

console.log(name.length);

//Wrapping primitve data types to object in action

const num = new Number(5);
console.log(num);

// Number {5}
//     __proto__: Number
//     constructor: ƒ Number()
//     toExponential: ƒ toExponential()
//     toFixed: ƒ toFixed()
//     toLocaleString: ƒ toLocaleString()
//     toPrecision: ƒ toPrecision()
//     toString: ƒ toString()
//     valueOf: ƒ valueOf()
//     __proto__: Object
//     [[PrimitiveValue]]: 0
//     [[PrimitiveValue]]: 5