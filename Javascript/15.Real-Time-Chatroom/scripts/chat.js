//adding new chat documents
// setup real time listener to chat db
//updating username
//updating room
class ChatRoom{

    constructor(room , username)
    {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message, //message:message due to es6
            username : this.username,
            room : this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        }


    //save chat documentt
    const response = await this.chats.add(chat);
    return response;
    }

    //realtime listener
    //we call it just once and it keeps checking for data all the time
    getChats(callback){
        this.unsub =  this.chats
        .where('room','==',this.room) //complex queries
        .orderBy('created_at')
        .onSnapshot( snapshot=>{
            snapshot.docChanges().forEach( change =>{
                if(change._delegate.type === "added")
                {
                    //update ui
                    callback(change.doc.data());
                }
            })    
        })
    }

    updateName(name){
        this.username = name;
        localStorage.setItem("username",name);
        console.log("name UPDATED");
    }

    updateRoom(room){
        this.room = room;
        console.log("room updated");
        //here even thou we change room the getChats is listening to previous value of room
        //so we first unsubscribe to stop listening & we hv to call getChats again to reflect changes
        if(this.unsub)
            this.unsub();
    }

}




// setTimeout( ()=>{
//     console.log("going to make changes");
//     chatroom.updateRoom("general");
//     chatroom.updateName("oswal");
//     chatroom.addChat("heya");
//     chatroom.getChats( data=> {
//         console.log(data);
//         console.log("new data......");
//     });
// },3000);

