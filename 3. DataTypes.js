/*
Data Type
1. primitive
 ->Number,string,boolean,undefinrd,null,briglnt,symbol
2. Non-primitive
 -> object : array , function
*/

const fullName = "Mahmud Un Nabi";
let age = 21;
const id = 394;
let cgpa = 3.67;
let phone = null;
let email = undefined;
let isPass = true;  // bool type -> ture/flase

console.log("Full Name :",fullName);
console.log("Age :",age);
console.log("ID ",id);
console.log("CGPA :",cgpa);
console.log("Phone :",phone);
console.log("Email :",email);
console.log("Result :",isPass);

console.log(typeof age);
console.log(typeof fullName);
console.log(typeof isPass);
console.log(typeof phone);
console.log(typeof email);


let x = BigInt("123");
let y = Symbol("Hello!");


