// Create String
let str = "Bangladesh";
console.log(str);
let str1 = 'Dhaka';

console.log(str.length); //String Length
console.log(str[1]);  // String Indices

//Template Literals -> `this is a template literal` 
let specialString = `i am a student`;
console.log(specialString);

//String Interpolation ->  `string text ${expression} string text`
let obj = {
    item : "pen",
    price : 20,
};
let output = `the cost of ${obj.item} is ${obj.price} taka`;
console.log(output);
