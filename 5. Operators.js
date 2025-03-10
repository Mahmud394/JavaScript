/*
Arithmetic Operators : +,-,*,/,%
Assignment Operators : =, += ,-= ,*= ,%= ,**=
Comparison Operators : >, >=, <, <=, == , !=,===,!==  
Logical Operators : && , || ,!
*/

// Arithmetic Operators : +,-,*,/,%,**
 let a =7;
 let b = 4;
 console.log("Add :" ,a+b);
 console.log("Sub :" ,a-b);
 console.log("Mul :" ,a*b);
 console.log("Div :" ,a/b);
 console.log("Rem :" ,a%b);
 console.log("Expo :" ,a**b);

 // unary Operators : ++ , -- 
a++;
console.log("A++ :" ,a);
b--;
console.log("B-- :" ,b);

console.log("++A :" ,++a);
console.log("--B :" ,--b);

// Assignment Operators : =, += ,-= ,*= ,%= ,**=
b += 3;  // b = b+3
console.log("B :" ,b);

// Comparison Operators : >, >=, <, <=, == , !=,===,!==  -> return : true/false
console.log(" A == B :" ,a == b);  // false
console.log(" A != B :" ,a != b);  // true

let c ="6";
console.log(" A === C :" ,a === c);  // false
console.log(" A !== C :" ,a !== c);  // true

console.log(" A >= C :" ,a >= c);  // true

//Logical Operators : && , || ,!
let cond1 = a>b;   // true
let cond2 = a == 9;  // true
let cond3 = b == 4  // false, b=5
console.log("cond1 && cond2 :" ,cond1 && cond2);  // true
console.log("cond1 || cond3 :" ,cond1 || cond3);  // true


