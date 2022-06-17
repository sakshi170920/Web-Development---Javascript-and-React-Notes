
    let form = document.querySelector('.signup-form');
    let feedback = document.querySelector(".feedback");

    form.addEventListener('submit',(e)=>{

        e.preventDefault();
        console.log(form.username.value);
                                           
    });

    form.username.addEventListener('keyup',e=>{
        let pattern = /^[a-zA-Z]{6,12}$/; //^ pattern should match from start to $end,
                                       // a-z characters allowed and length must be > 6
        let username = form.username.value;
        //let username =  e.target.value;

        if(pattern.test(username)) //returns boolean value
        {
            feedback.textContent = 'Username is Valid!';
            //console.log(e);
            form.username.setAttribute('class','success');
            console.log("matched");
        }
        else
        {
            form.username.setAttribute('class','error');
            feedback.textContent = 'Username must be 6-12 characters long and contain only lower and upper case characters';
            console.log("not matched");
        }
        // if(username.search(pattern)!=-1) //returns position where found , -1 if not
        // {
        //     console.log("matched");
        // }
        // else
        // {
        //     console.log("not matched");
        // }
    });
