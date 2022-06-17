/*When we have a lot of requests we want one after another or maybe the next one is based
on the pervious data then callbacks become messy , a good alternative to it is using promise
now Promise takes in two functions as arguments : resolve and reject
resolve should be called when we have suceesully fetch data and pass that  asa argument to resolve
when we have failed to fetch data call reject and pass your error message or anythng you want 

promise.then() executes when resolve is called 
promise.catch() executes when reject is invoked
*/

//promise Example

const getSomething = ()=>{
    return new Promise((resolve , reject)=>{
        //fetch data
        let bool = false;
        if(bool)
            resolve("resceived data");
        else
            reject("something went wrong");
    });
};

getSomething().then(data=>{ console.log(data);})
.catch( err =>{
    console.log(err);
})

//actual example

let getTodos = (resource) => {

    return new Promise((resolve,reject)=>{
        //fetch data

        //once request completed
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status === 200)
            {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4)
            {
                reject("Sorry ! Couldn't fetch the data");
            }
        });

        //request send
        request.open('GET',resource);
        request.send()
    });   
}

//one promise
getTodos('todos/ken.json').then(data =>{console.log(data)}).catch(err =>{console.log(err)});

//Chaining Promises
getTodos('todos/ken.json')
.then(data =>{
console.log("Promise 1 resolved",data);
return getTodos('todos/john.json');
}).then(data =>{
console.log("Promise 2 resolved",data);
return getTodos('todos/ken.json');  
}).then(data=>{
console.log("Promise 3 resolved",data);  
})
.catch(err =>{console.log(err)}); //common catch for error caused at any time
//if anyone fails everthing fails