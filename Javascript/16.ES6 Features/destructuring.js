/**Destructuring :
 * Easily access array elements or object properties and store them into variables.
 */

const numbers = [1,2,3,4];
[num1,num2] = numbers;
console.log(num1,num2); //1 2

const {name} = {name:"Sakshi",age:20};
console.log(name);
//console.log(age); //undefined