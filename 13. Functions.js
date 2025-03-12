function myFunction() {
    console.log("Hello!");
    console.log("I am Mahmud");
}
myFunction();

function myFunctions(msg) {
    console.log(msg);
}
myFunctions("I love u");

function sum(x,y)
{
    console.log(x+y);
}
sum(5,8);

function sums(x,y)
{
    return x+y;
}
console.log(sums(8,8));

// Arrow Functions
/*
const functionName = ( param1, param2 ...) => {

//do some work
}
*/
function mul(x,y){
    return x*y;
}
console.log(mul(8,8));

const arrowMul = (a,b) =>{  // Arrow Functions
    return a*b;
}
console.log(arrowMul(9,8));
console.log(arrowMul);


const arrowPrint = () =>{  // Arrow Functions
    console.log("I am ready!");
}
arrowPrint ();

/*
Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.
*/
function countVowels(str){
    let count =0;
    for(let char of str){
        console.log(char);
    }
    for(let char of str){
        if(char === 'a' || char === 'i' || char === 'o' || char === 'e' || char === 'u')
            count++;
    }
    console.log(count);
}
countVowels("mahmudunnabi");

// Qs. Create an arrow function to perform the same task.
const countVow = (stri)=>{
    let count =0;
    for(let char of stri){
        console.log(char);
    }
    for(let char of stri){
        if(char === 'a' || char === 'i' || char === 'o' || char === 'e' || char === 'u')
            count++;
    }
    console.log(count);
}
countVow("mahmudunnabi");

// forEach Loop in Arrays
/*
arr.forEach( callBackFunction )
CallbackFunction : Here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function.
*/
let arr = [1,3,5,6,7,8]
arr.forEach( ( val ) => {
    console.log(val);
});
arr.forEach( ( val,idx,arr ) => {
    console.log(val,idx,arr);
});

// Qs. For a given array of numbers, print the square of each value using the forEach loop.
let num = [45,7,85,78,6];
num.forEach( ( val) => {
    console.log(val*val);
});