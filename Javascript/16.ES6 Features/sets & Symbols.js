//sets doesnt contain duplicate values
const arr = [1,2,3,4,5,2];
const set = new Set(arr);
console.log(arr,set); //Set(6) [1, 2, 3, 4, 5, 2] Set(5) {1, 2, 3, 4, 5}


//nicer way to remove duplicate values in an array
const arr_m = [...new Set(arr)];
console.log(arr_m);

//clear set
set.clear();

//add elements
set.add(1);
console.log(set);

set.add(3).add(6).add(9).delete(6);
console.log(set);

//check if an element is present
console.log(set.has(6) , set);

 set.forEach( num=> console.log(num)); // they dont modify real set


/******************Symbol********************** */
//No 2 symbols can be same , used for ids

const sys1 = Symbol(); //we dont use new bocz symbol is a primitve type not object
const sys2 = Symbol(); 
console.log(sys1,sys2,sys1===sys2); //Symbol() Symbol() false

const sys3 = Symbol("sakshi"); //we dont use new bocz symbol is a primitve type not object
const sys4 = Symbol("sakshi"); 
console.log(sys1,sys2,sys1===sys2); 

set.add(sys3).add(sys4);
console.log(set);
//set doesnt have duplicste values , so it proves tht they look same but are diff
// Set(5) {1, 3, 9}
// [[Entries]]
// 0: 1
// 1: 3
// 2: 9
// 3:
// value: Symbol(sakshi)
// 4:
// value: Symbol(sakshi)
// size: (...)
// __proto__: Set