// if-else Statement
let age = 21;

if(age >= 18)
{
    console.log("You can vote");
}
else
{
    console.log("You can't vote");
}

// odd or even
let number = 21;

if(number%2 == 0)
{
    console.log(number,"is even");
}
else
{
    console.log(number,"is odd");
}

// else-if Statement

let age$ = 21;

if(age$ < 18)
{
    console.log("Junior");
}
else if(age$ >= 60)
{
    console.log("Senior");
}
else
{
    console.log("Middle");
}


// Ternary Operators : condition ? true output : false output
let a = 21;
let result = a >= 18 ? "vote " : "cannot vote";
console.log(result);

// switch
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


