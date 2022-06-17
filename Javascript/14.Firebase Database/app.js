const db = firebase.firestore();
//getting collections
let ul = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
const addReceipe = (receipe,id)=>{
    let time = receipe.created_at.toDate();
    let html = `
    <li data-id=${id}>
    <div>${receipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">Delete</button>
    </li>
    `;

    ul.innerHTML += html;
}

//get documents
// db.collection('receipes').get().then( snapshot => {
//     //console.log(snapshot);
//     snapshot.docs.forEach( doc=>{
//         //console.log(doc.data());
//         addReceipe(doc.data(),doc.id);
//     })
// });

//get document
/* onSnapshot gives you snapsot(instance of your database rn) 
,whenever data changes ,onSnapshot is called and return current snapsoht*/
const unsubscribe =  db.collection('receipes').onSnapshot( snapshot=>{
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach( change =>{
        const doc = change.doc;
        //console.log(change._delegate.type);
        if(change._delegate.type === 'added')
        {
            //addReceipe(doc,doc.id);
            addReceipe(doc.data(),doc.id);
        }
        else if(change._delegate.type === 'removed')
        {

            deleteReceipe(doc.id);
            
            //from event listener we have already deleted it from real database
            //now just from ui we want to delete

        }
    }
    )

})

const deleteReceipe = id =>{
    const allLi = document.querySelectorAll('li');
    allLi.forEach( li=>{
        //console.log(li.getAttribute('data-id'));
        if(li.getAttribute('data-id') === id){
            li.remove();
            //console.log(id,li.getAttribute('data-id'));

        }
        else{
            //console.log(id,li.getAttribute('date-id'));
        }
    })
}

//add documents
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const now = new Date();
    const receipe = {
        title: form.receipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('receipes').add(receipe).then( ()=>console.log("Receipe added"))
    .catch(()=> console.log("Receipe was no saved !"));
});

//delete documnet
ul.addEventListener('click', e=>{
    //console.log(e);
    if(e.target.tagName === 'BUTTON')
    {
        const id = e.target.parentElement.getAttribute("data-id");
        //console.log(id);
        db.collection("receipes").doc(id).delete().then( ()=>
            console.log("receipe deleted")
        )
    }
})

//unsubscirbe from changes
button.addEventListener('click', ()=>{
    unsubscribe();
})