//Async and await

const getTodos = async ()=>{ //dueto async keyword , getTodos is a promise
    const response = await fetch("todos/john.json"); //due to await keyword , response gets assigned onnly when fetch is completed
    
    if(response.status !== 200)
        throw new Error("Cannot fetch data !");
    
    // console.log(response);
    const data = await response.json(); // Again a promsie so wait
    // console.log(data);

    // const response_ = await fetch("todos/ken.json"); //we can chain a lot of promises cleanly
    // const data_ = await response_.json(); 

    return data;
}


console.log(1);
console.log(2);

getTodos().then( data=>{ //as getTodos is an async func
    console.log(data);
}).catch((err)=> console.log(err.message));

console.log(3);
console.log(4);

