    
    //***************Change innerHTML *****************/
    let paras = document.querySelectorAll('p');
    paras.forEach( (para) => {
        para.innerHTML += ' !!!!';
    });

    let p_demo = document.querySelector('p.demo');
    console.log(p_demo.innerHTML);

    let people = ['john','ken','steve'];
    people.forEach( person => {
        p_demo.innerHTML += `<p>${person}</p>`;
    });
    console.log(p_demo.innerHTML);

    //**************Get&Set Attribute *****************/
    let link = document.querySelector('a');
    console.log(link.getAttribute('href')); //we can do link.href but its not preferred due to variatiosn in browser compatibility
    link.setAttribute('href','www.vit.edu');
    link.innerHTML = 'Vit Pune';
    console.log(link.getAttribute('href'));

    link.setAttribute('style','color:green;');//this will overwrite all the previous
                                              // assigned style properties to only one value color: orange


    //**************Changing CSS Styles *****************/
    let title = document.querySelector('h1');
    console.log(title.innerHTML);
    title.style.margin = '20px';
    title.style.color = 'red';
    title.style.fontSize = '30px';//in CSS its font-size here it is fontSize

    //**************Adding & Removing classes *****************/
    let p = document.querySelector('p');
    p.classList.add('error');//add error class
    p.classList.remove('error');//removoe error class
    p.classList.toggle('test');//adds test class if not there in list and remvoes it if laready there



    console.log("*****before*****");
    let sol = document.querySelectorAll('p');
    console.log(sol);
    console.log("******after****")
    sol.forEach( (para) => {
        let temp = para.textContent; //textContent when used it takes all the text inside even if display prop is none and its not on screen
                                     //para.innerText used when we only want content inside which is shown on page
        if(temp.includes('error'))
            para.classList.add('error');
        if(temp.includes('success'))
            para.classList.add('success');
        
        // if(temp.f)
    });
    console.log(sol);

    //**************Node Children , parent , sibling *****************/
    let all = document.querySelector('div.task');
    console.log(all.children); //Returns an HTML Collection so cant use for each
    Array.from(all.children).forEach( p => {
        p.classList.add('demo');
    });
    console.log(all.children); 

    let sol1 = document.querySelector('body > div.task2 > p:nth-child(1)');
    console.log(sol1.textContent);
    console.log(sol1.nextSibling.textContent); //dont use
    console.log(sol1.nextElementSibling.textContent);
    console.log(sol1.parentNode.children);




    // console.log(all.children.)
    




