// Array Methods

// Map  -> return new array   //arr.map( callbackFnx( value, index, array ) )
let arr = [3,6,8,9];
arr.map( ( val ) => {
    console.log(val);
});

let newArr = arr.map( ( val ) => {
    return val * 2;
});
console.log(newArr);

// Filter -> Creates a new array of elements that give true for a condition/filter.

let newArray = arr.filter( ( val ) => {
    return val % 2 === 0;
});
console.log(newArray);

// Reduce -> Performs some operations & reduces the array to a single value. It returns that single value.

const output =  arr .reduce ((prev,curr)=>{
    return prev+curr;
});
console.log(output);

const findBig =  arr .reduce ((prev,curr)=>{  // find lergest in array
    return prev > curr ? prev : curr;
});
console.log(findBig);


// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [98,67,89,97,91,56,78];
let topper = marks.filter( ( val ) => {
    return val > 90;
});
console.log(topper);

/*
Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let n = prompt("enter a number :");

let ar = [];
for(let i=1;i<=n;i++){
    ar[i-1]=i;
}
console.log(ar);

let sum = ar.reduce((prev,curr)=>{
    return prev + curr;
});
console.log("Sum :",sum);

let facto = ar.reduce((prev,curr)=>{
    return prev * curr;
});
console.log("Factorial :",facto);