// object -> key : value

const student = {
    fullName : "Mahmud Un Nabi",
    age : 21,
    id : 394,
    cgpa : 3.67,
    phone : null,
    email : undefined,
    isPass : true,

};
console.log(student);

console.log(student["fullName"]);

student.age = student.age +1;
console.log(student["age"]);

console.log(student.cgpa);
console.log(student.isPass);


console.log(typeof student);
console.log(typeof student["fullName"]);
