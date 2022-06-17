//render chat templates to dom
//clear the list of chats when we switch

class ChatUI{
    constructor (list){
        this.list = list;
    }
    //create html for chat doc and render it io ui
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix:true}
        )
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        </li>
        `;

        this.list.innerHTML += html;

    }
    clear(){
        this.list.innerHTML = "";
    }
}