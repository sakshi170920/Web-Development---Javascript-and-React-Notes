    
    let ul = document.querySelector('ul');

    let button = document.querySelector('button');
    button.addEventListener('click',()=>{
    //console.log("Button is clicked");

    //ul.innerHTML += `<li>add new todo</li>`; //1 way
    let li = document.createElement('li');
    li.textContent = 'add new';
    //ul.append(li); //to add at end
    ul.prepend(li); // add at start

    });

    let items = document.querySelectorAll('li');
    items.forEach((item)=>{
        console.log(item);
        //associate each item with an event listener
        item.addEventListener('click',(e)=>{
            //console.log(e);
            console.log("Event in LI"); 
            e.stopPropagation();
            console.log(e.target);//gives you the item you clicked
            //console.log(item);
            //e.target.style.textDecoration = 'line-through';
            e.target.remove(); //after refresh all items will reappear

        });
    });

    /**************************Event Bubbling and Delegation************************/

    ul.addEventListener('click',(e)=>{
        console.log("Event in UL");
        console.log(e.target);
    });

    /*You will observe that when we click li , first it check for event listener for li , 
    if found it calls that , then it bubbles up towards parent as clicking li is clicking ul to
    then it check for event listener at ul for that event and it excutes then after it bubbbles up towards
    ul's parent and this goes on - Event Bubbling
    can be stopped using : e.stopPropagation(); */
