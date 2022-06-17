// document.addEventListener("DOMContentLoaded", function() {

const scores = [10,20,34,56,19,45,5];
const scores2 = [{name: 'sakshi', value:20},
            {name: 'oswal', value:30},
            {name: 'jitendra', value:50},
            {name: 'john', value:16},
            {name: 'ken', value:35}];
//***********Filter Method (returns new array & doesnt modify original)*********/
//on a condition if its true keeps that value or else removes it
const filteredScores =  scores.filter( score=> score>20); 
console.log(filteredScores);

//**********Map method (returns new array & doesnt modify original)***********/
//maps every product to a modified value returned by callback
console.log(scores2);
const mappedScores =  scores2.map( (val)=> {
    if(val.value >20)
    {
        //val = val/2;//this will modify original array so dont use
        // console.log(val);
        // console.log({name: val.name , value: val/2});
        return {name: val.name , value: val.value/2};
    }
    else
    {        console.log(val);

        return val;
    }
}
 ); //on a condition if its true keeps that value or else removes it
console.log(mappedScores);

/**************Reduce Method (returns a value called accumulator)*************/
//remembers value of acc and parses through array 
const result = scores2.reduce( (acc, curr)=>{
    if(curr.value > 30)
        acc++;
    return acc;
},0);
console.log(result);

/**************Find Method(returns the first position where found)*******************/
//return a bollean value , condition to check
const value = scores.find( score=> score >40
);

/**************Sort Method(destructive method ,changes original array)*******************/
scores.sort();
console.log(scores); //you will see 5 comes after 10 bcoz it first checks first element and then second
                    //e.g 10 , 5 ,56 , it will check first 1, ,5 ,3 and when 5 and 56 are equal then 0&6
//(a,b) return +1 if you want b before a , -1 if a before b and 0 when same ondragover
scores2.sort( (a,b)=> a.value-b.value); //asc order
console.log(scores2); 

/**************Chaining Methods*******************/
const promos = scores2
    .filter( score=> score.value>20)
    .map( score=> `${score.name} has ${score.value} score in exam`);

console.log(promos);




// });