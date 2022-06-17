class User{
    constructor(userme , email)
    {
        this.username = userme;
        this.email = email;
        this.score = 0;
    }
    login() 
    {
        console.log(`${this.username} has logged in`);
    }
    incScore()
    {
        this.score++;
        console.log(`${this.username} has score of ${this.score}`);
        return this ; 
    }
}
class Admin extends User{
    //if no constructor defined explicity then constructor of parent class used.

    constructor(username,email,title){
        
        //this.email; // gives error
        //Must call super constructor in derived class before accessing 'this' or returning from derived constructor

        super(username,email);
        this.title = title;
    }     
    
    deleteUser(user){
        users = users.filter( u=> u.username!== user.username);
    }
}

const user1 = new User("sakshi","oswalsakshi17@gmail.com");
const user2 = new User("shruti","shruti123@gmail.com");
const admin = new Admin("john","john@gmail.com","SOftware Developer");

let users = [user1,user2,admin];
console.log(users);
admin.deleteUser(user2);
console.log(users);

console.log(admin);

/*********************CONTRUCTORS under the Hood**********************/

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


console.log(admin);
//     email: "john@gmail.com"
//     score: 0
//     title: "SOftware Developer"
//     username: "john"
// __proto__: User
// constructor: class Admin
// deleteUser: deleteUser(user){ users = users.filter( u=> {…}
// __proto__: Object

//All methods are inside proto propert , when we create bojects using class all methods
// are automatically inclde inside the proto propert
// However ,when we create object using function constructor these methods are not included in proto property as 
// seen above : greet property not included in proto wheras deleteuser is included in admin