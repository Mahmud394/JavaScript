
alert("hello!"); // one time popup

let name = prompt("Write Your Name :");  // way to input from user
console.log("Name :", name);

/*
Qs1. Get user to input a number using prompt(“Enter a number:”). 
Check if the number is a multiple of 5 or not.
*/

let num = prompt("Write a number :");  
console.log("Number :", num);
if(num%5 === 0){
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"is not a multiple of 5");
}

/*
Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

let mark= prompt("Enter mark(0 to 100) :");  
console.log("Mark :", mark);
if(mark >= 80 && mark <=100){
    console.log("Grade : A");
}
else if(mark >= 70 && mark <=79){
    console.log("Grade : B");
}
else if(mark >= 60 && mark <= 69){
    console.log("Grade : C");
}
else if(mark >= 50 && mark <= 59){
    console.log("Grade : A");
}
else{
    console.log("Grade : F")
}