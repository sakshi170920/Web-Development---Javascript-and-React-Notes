
console.log("document is ready");


/*************************Query Selectors*****************************/
let para = document.querySelector('p'); // selects first found p in html code
console.log(para);

let divs = document.querySelectorAll("div");//selects all elements of type div
divs.forEach( (x)=> {
    console.log(x.innerHTML); }); //returns NodeList

let demo = document.querySelector('.demo');//select first element with class demo
 console.log(demo);


let div_demo = document.querySelector('div.demo');//select first element with class demo
console.log(div_demo);

let id = document.querySelector('#id1');//select first element with class demo
console.log(id);

/*************************getElement *****************************/

let id1 = document.getElementById('id1');
console.log(id1);


let paras = document.getElementsByTagName('p');
console.log(paras);  //HTMLCollection(2) [p, p.demo] same as NodeList but doesnt has forEach func



//to get a css selector select that element -> Inspect -> on that element -> copy -> copy css selector
