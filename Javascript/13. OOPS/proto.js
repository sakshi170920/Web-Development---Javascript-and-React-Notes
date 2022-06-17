
//All methods are inside proto propert , when we create bojects using class all methods
// are automatically inclde inside the proto propert
// However ,when we create object using function constructor these methods are not included in proto property as 

/**PROTOTYPE MODEL 
 * Every object in JS has a prototype model
 * Prototype contaisn all the methods for that object
 * 
 * e.g Date prototype has : getMonth(), getDate()
*/

console.log(Date.prototype);

function Person( name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`${this.name} says Good Morning !`);
    }
}
let p = new Person("sakshi",20);
console.log(p.age,p.name);
p.greet();

console.log(p);
// age: 20
// greet: ƒ ()
// name: "sakshi"
//     __proto__:
//     constructor: ƒ Person( name,age)
//     __proto__: Object


//To get a function inside a prototype model
Person.prototype.greetNight = function(){
    console.log(`${this.name} says Good Night!`);
}

console.log(p);
// age: 20
// greet: ƒ ()
// name: "sakshi"
//     __proto__:
//     greetNight: ƒ ()
//     constructor: ƒ Person( name,age)
//     __proto__: Object


/*******************Prototypal Inheritance********************* */
function Engineer( name,age,degree){
    //to inherit the name ,age (properties)  constructor from parent class Person
    Person.call(this,name,age);
     // ("object to which this must be pointing to , we want the newly created object" , other properties we want to inherit from)

    
    this.getDegree = function(){
        console.log(`${this.name} has a degree in branch ${this.degree}`);
    }
}
let e = new Engineer('sakshi','ss@gmail.com',"Computer Science");
console.log(e);

// age: "ss@gmail.com"
// getDegree: ƒ ()
// greet: ƒ ()
// name: "sakshi"
//     __proto__:
//     constructor: ƒ Engineer( name,age,degree)
//     arguments: null
//     caller: null
//     length: 3
//     name: "Engineer"
//         prototype: {constructor: ƒ}
//             __proto__: ƒ ()
//             [[FunctionLocation]]: proto.js:51
//             [[Scopes]]: Scopes[2]
//                 __proto__: Object


//To inherit methods from parent class like greetNight
Engineer.prototype = Object.create(Person.prototype);

console.log(e);
// age: "ss@gmail.com"
// getDegree: ƒ ()
// greet: ƒ ()
// name: "sakshi"
//     __proto__:
//     constructor: ƒ Engineer( name,age,degree)
//     arguments: null
//     caller: null
//     length: 3
//     name: "Engineer"
//         prototype: Person //notice it now has all proptype functions of person
//             __proto__:
//             greetNight: ƒ ()
//             constructor: ƒ Person( name,age)
//                 __proto__: Object
//                 __proto__: ƒ ()
//                 [[FunctionLocation]]: proto.js:51
//                 [[Scopes]]: Scopes[2]
//                 __proto__: Object

/**You may have noticed that javascript contains all methods in a heirarchy of inheritance 
 * here it is Engineer -> Person -> Object
 * 
 * All objects are inherited from Object class.(It's like the base class)
 */