let addForm = document.querySelector('.add');
let ul = document.querySelector('.todos');
let search = document.querySelector('body > div > header > form > input');
const generateTodoTemplate = (todo)=>{
    ul.innerHTML += 
    `<li class="list-group-item d-flex justify-content-between align-items-center" >
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    ;
}
addForm.addEventListener( 'submit',(e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim space before and after
    console.log(todo);
    if(todo.length)
    {
        generateTodoTemplate(todo);
        addForm.reset();
    }
});

//delete todo
ul.addEventListener('click',(e)=>{
    if( e.target.classList.contains('delete')){ //clicked on trash can
        e.target.parentElement.remove(); //trash can parent is li - which is required
    }
});

const ulListHandler = (term) =>{
    // console.log(ul.children);
    //add filtered class to li who doesnot contain term
    Array.from(ul.children).filter( todo=> !todo.textContent.toLowerCase().trim().includes(term))
    .forEach( todo=> todo.classList.add('filtered'))

    //remove filtered class to li who contain term (as we keep adding or removing character in text box)
    Array.from(ul.children).filter( todo=> todo.textContent.toLowerCase().trim().includes(term))
    .forEach( todo=> todo.classList.remove('filtered'))
}

search.addEventListener('keyup',()=>{
    //console.log(search.value);
    let term = search.value.trim().toLowerCase();
    ulListHandler(term);
});