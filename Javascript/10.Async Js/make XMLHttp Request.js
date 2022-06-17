
//Use callback functions for each task much more flexible

let getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
    
        // 0	UNSENT	Client has been created. open() not called yet.
        // 1	OPENED	open() has been called.
        // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        // 3	LOADING	Downloading; responseText holds partial data.
        // 4	DONE	The operation is complete.
    
        //console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200)//status must be checked bcoz readstate tells if
                                                              // req was completed but status will tell if no error occured in it
        {
            let data = JSON.parse(request.responseText);//converts json string to array of js objects
            callback(undefined,data);
        }
        else if(request.readyState === 4)
        {
            callback("Sorry ! Couldn't fetch the data",undefined);
        }
    });
    
    request.open('GET',resource);//this just opens the req or configures
    request.send()//actually initiates the req
    
}

console.log(1);
console.log(2);

getTodos('https://jsonplaceholder.typicode.com/todos/1',(err,data) =>{ //convention to pass err first and then data
    console.log('callback fired');
    if(err)
        console.log(err);
    else
        console.log(data);
});


console.log(3);
console.log(4);

//if we want to get todos one by one i.e fire a callback after we have received one todo then another
//we will have to call again the callback for diff http request so we pass resource

/*These callbacks become too messy */
getTodos('todos/john.json',(err,data) =>{ //convention to pass err first and then data
    console.log('callback fired');
    if(data)
    {
        console.log(data);
        getTodos('todos/ken.json',(err,data) =>{ //convention to pass err first and then data
            console.log('callback fired');
            if(data)
            {
                console.log(data);
                getTodos('todos/mario.json',(err,data) =>{ //convention to pass err first and then data
                    console.log('callback fired');
                    if(data)
                    {
                        console.log(data);
                    }
                    else
                        console.log(err);
                });
            }
            else
                console.log(err);
        });
    }
    else
        console.log(err);

});