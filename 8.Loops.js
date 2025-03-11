// for Loop

for (let i = 1; i <= 5; i++) {
    console.log("Bangladesh");
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum+i;
}
console.log("SUM :",sum);

// while Loop
let i=1;
while(i<=5){
    console.log("Bangladesh");
    i++;
}

// do-while Loop
let j = 1;
do{
    console.log("Bangladesh");
    j++;
}while(j<=5);

// for-of Loop -> using for sting/arry every char
let str = "Bangladesh";
let size = 0;
for(let k of str){ 
     // iterator -> characters
    console.log("i ->",i);
    size++;
}
console.log("Size :",size);

// for-in Loop -> using for object
const student = {
    fullName : "Mahmud Un Nabi",
    age : 21,
    id : 394,
    cgpa : 3.67,
    phone : null,
    email : undefined,
    isPass : true,

};
for(let key in student){
    console.log("key ->",key, "valus :", student[key]);
}