
//store data from LS
//even if we comment out this lines , it will still will be present in database

localStorage.setItem('name','Sakshi');
localStorage.setItem('age',20);

//get data from LS
let name_ = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name_ , age);

//Update data from LS
localStorage.setItem('age',40);
let age_ = localStorage.getItem('age');
console.log(age_);

//delete item
localStorage.removeItem('name');

let name1 =  localStorage.getItem('name');
console.log(name1);

//CLear all data in LS

// localStorage.clear();

//to store complex data types like objects in Local Storage we need to convert them to string

const todos = [
    {"buy milk": "john"},
    {"do plumbing": "john"},
    {"read book": "john"} 
]
localStorage.setItem("todos",JSON.stringify(todos));

let todos_stored = localStorage.getItem("todos");
console.log("stringified todos",todos_stored); //string
console.log("json parsed todos",JSON.parse(todos_stored)); //object



