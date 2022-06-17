let arr = ['str','xy','x'];
arr[1] = 'se';
console.log(arr[1]);

let arr1 = [20,30,40];
console.log(arr1);

// let arr3 = arr+arr1;
// console.log(arr3);
// console.log(arr3.length);

let arr4 = arr.concat(arr1);
console.log(arr4);
console.log(arr4.length);

let result = arr.join(' - ');
console.log(result);

let result1 = arr.push(['sakshi','hey']); //result1 = 4 (push return number of elements after adding arg in list)
console.log(result1); 
//if we pass array to push then 4th element is entire array treated 
//as one object so push always does length+1 whereas 
//concat will take each element so length(result) = length(arr1) + length(arr2)
//push changes original object

let result2 = arr.pop();
console.log(result2);

