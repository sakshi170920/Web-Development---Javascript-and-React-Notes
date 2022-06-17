//rest paramter
// take a lot of arguments and bundle them into an array

const double = (...nums)=>{  //takes in all individual elements and bundles them
    nums = nums.map(num => num*2);
    return nums;
}

console.log(double(1,4,5,6,7));// returnded na array (5) [2, 8, 10, 12, 14]

//spread paramter (arrays)

const people = ["shaun","mario","sakshi"];
console.log(...people); // returned individual elements : shaun mario sakshi

const people1 = [...people,"oswal"]; //easy way to include another array
console.log(people1);

//spread parameters (objects)
const details = {name_:"sakshi",age:20,branch:"computer"}
const peopleClone = details; //when i say this we arent making a copy here 
                            //it is still pointing to original array only
const realClone = {...details};
console.log(realClone);
details.name_ = "sakshi oswal";
console.log(details,realClone);
const details_m = {...realClone,location: "karad"};
console.log(details_m);