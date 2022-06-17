
    const correctAnswers = ['B','B','B','A']
    const form = document.querySelector('.quiz-form');
    const result = document.querySelector('.result');
    

    form.addEventListener( 'submit',e=>{
        e.preventDefault();
        let score = 0;
        const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];//radio button return the one checked
        userAnswers.forEach( (answer , index)=>{
            if(answer === correctAnswers[index])
                score+=25;
        })
        
        result.classList.remove('d-none');
        
        //after result dispalyed we want to croll up automatically
        scrollTo(0,0); //window.scrollTo() is inferred

        let current_state = 0;
        const timer = setInterval( ()=>{
            result.querySelector('span').innerText = ` ${current_state}% `;
            if(current_state === score)
                clearInterval(timer);
            current_state++;
        },10);
        


    });

    /************************WIndow Object ( GLobal Object)*************************************/
    /*all objects belong to window everything , the document , console , alert hence no need to write window.document or
    window.cosole as it is already inferred */

    console.log("hello");
    window.console.log("hello"); // both are same

    console.log(document.querySelector('p'));
    console.log(window.document.querySelector('p')); //bot are same


