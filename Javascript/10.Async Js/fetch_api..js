//fetch api
/* 3 steps : 
1. fetch api , make a request , then once done we get a response but it doesnt contain our actual data ,
that is stored in request.json which is a promise
2. so fire a .then again to get actual data from response.json
3.catch for error at step 1 or 2 */

fetch("todos/joh.json") //now when we make a mistake in url the client side mistakes arent handle here
//thr request is still made and response is returned  but the status will not be 200
//only network errors are caught , like we couldnt fire an api
.then( response =>{
    console.log(response);
    return response.json() //this is a promise again
}).then( data =>{ //promise return data
    console.log(data);
})
.catch(err=>{
    console.log(err);
})