console.log(1);
console.log(2);

//SetTimeout is an async func, here 1,2,3,4 is printed and after setimeout is finshed i.w 2 sec its callback is called 
//hence we see at the end callback called printed
setTimeout(()=>{
    console.log("CALLBACK CALLED");
},2000)

console.log(3);
console.log(4);

