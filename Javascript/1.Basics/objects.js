//object literals
let user = {
    age: 20, // property : value
    name: 'sakshi',
    location: 'Karad',
    special,    // when object name is same as the value we can write only one value - special : special,
    friends: [
        {name:'xx',age:40},
        {name:'yy',age:30}
    ],//objects in array
    login: () => {
        console.log("logged in");
        console.log(this); //this inside an arrow func is global context - Window

    },
    demoLogin : function(){
        console.log(this); //this inside an normal func is the object in context
    },
    friendsDisplay(){
        //here as friendsDisplay is a normal function this points to user
        this.friends.forEach( person=> {
            console.log(person.name,person.age);
        });
    }
}
console.log(user);
console.log(user.name);
let demo = 'location';
console.log(user[demo]);
user.age = 21;
console.log(user.age);
console.log("this normally in file");
console.log(this);
console.log("this inside arrow func");
user.login();
console.log("this inside normal func");
user.demoLogin();
user.friendsDisplay();

//Math Object
console.log(Math);
console.log(Math.PI);
let a = 77.7;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.trunc(a));
console.log(Math.random());
const r = Math.random();
console.log(r);//prints value from 0 to 1
console.log(Math.round( r*100 ) );//random valye from 0 to 100

