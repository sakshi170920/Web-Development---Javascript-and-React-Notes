class User{

    //initialize object
    constructor(userme , email)
    {
        this.username = userme;
        this.email = email;
        this.score = 0;
    }
    login() //dont use arrows func as at that time this is a Window object
    {
        console.log(`${this.username} has logged in`);
    }
    incScore()
    {
        this.score++;
        console.log(`${this.username} has score of ${this.score}`);
        return this ; //return current user object , now we can chain this method

    }
}

const user1 = new User("sakshi","oswalsakshi17@gmail.com");
const user2 = new User("shruti","shruti123@gmail.com");

console.log(user1);
console.log(user2.email);

//user1.login().incScore(); //error because user1.login() return undefined ,and undefined.incScore() doesnt make sense
user1.incScore().incScore();

//The 'new' keyword
/** 
 * 1. It creates a new empty Object.
 * 2. It binds the value of this to newly created empty object.
 * 3. It calls the constructor func to build the object*/ 