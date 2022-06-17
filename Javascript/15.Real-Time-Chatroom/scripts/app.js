//this file joins ui and database
//dom queries
const chatList = document.querySelector(".chat-list");
const newchatform = document.querySelector(".new-chat");
const newnameform = document.querySelector(".new-name");
const updatemsg = document.querySelector(".update-msg");
const chatrooms = document.querySelector(".chat-rooms");

//check local storage of name , check before creating object of chatroom
const username =  localStorage.getItem.username ? localStorage.username : "anonymous";

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new ChatRoom('general',username);

//get chats and render
chatroom.getChats( data=>chatUI.render(data))

//add a new chat
newchatform.addEventListener('submit',e=>{
    e.preventDefault();
    const message = newchatform.message.value.trim();
    chatroom.addChat(message)
    .then(()=>{
        newchatform.reset();
    }).catch( ()=> console.log("error"));
})

//update name
newnameform.addEventListener('submit',e=>{
    e.preventDefault();
    const name = newnameform.name.value.trim();
    //update via chatroom method
    chatroom.updateName(name);
    newnameform.reset();

    //show then hide the msg
    updatemsg.textContent = `Your name was updated to ${name}`;
    setTimeout(()=>updatemsg.textContent = '',3000); 

})

chatrooms.addEventListener("click",e=>{
    const room = e.target.id;
    if(e.target.tagName === "BUTTON")
    {
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        chatroom.getChats(data=>chatUI.render(data));
    }
        
})
