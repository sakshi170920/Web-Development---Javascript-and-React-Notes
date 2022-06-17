document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('button');
    button.addEventListener('click',()=>{
    //console.log("Button is clicked");

    //ul.innerHTML += `<li>add new todo</li>`; //1 way
    let li = document.createElement('li');
    li.textContent = 'add new';
    //ul.append(li); //to add at end
    ul.prepend(li); // add at start

    });

    /*instead of attaching event listener to  all li , attach to only one ul*/
    let ul = document.querySelector('ul');
    ul.addEventListener('click',e=>{
        console.log(e.target);//we get li

        //if we click in between 2 li , ul will be called so first verify
        if(e.target.tagName == 'LI')
        {          
            e.target.remove();
        }
    });

    /************************Mouse Move Event******************************/
    let box = document.querySelector('.box');
    
    box.addEventListener('mousemove',e=>{
        console.log(e);
        box.textContent = `X : ${e.offsetX} Y : ${e.offsetY}`;
    });

    /************************Copy Event******************************/
    document.addEventListener('wheel',e=>{
        console.log(e.pageX,e.pageY);
    });




});