let foodItems = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Tacos"];
// Push( ) : add to end
foodItems.push("Ice Cream");
console.log(foodItems);

// Pop( ) : delete from end & return
foodItems.pop();
console.log(foodItems);

// toString( ) : converts array to string
console.log(foodItems.toString());

// Concat( ) : joins multiple arrays & returns result
let marvel_hero = ["Iron Man", "Captain America", "Thor", "Spider-Man", "Black Panther", "Hulk", "Black Widow"];
let dc_hero = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern", "Cyborg"];
let heros = marvel_hero.concat(dc_hero);
console.log(heros);

// Unshift( ) : add to start
marvel_hero.unshift("Mahmud");
console.log(marvel_hero);

// shift( ) : delete from start & return
marvel_hero.shift();
console.log(marvel_hero);

// Slice( ) : returns a piece of the array -> slice( startIdx, endIdx )
console.log(marvel_hero.slice(2,4));
console.log(marvel_hero.slice(2));

// Splice( ) : change original array (add, remove, replace) -> splice( startIdx, delCount, newEl1... )
let arr = [1,2,4,7,8,9,3,5,6];
arr.splice(2,0,101);  // add element
arr.splice(3,1);  // delete element
arr.splice(3,1,101);  // replace element

/*
Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”

a. Remove the first company from the array

b. Remove Uber & Add Ola in its place

c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();  //a
console.log(companies);
companies.splice(2,1,"ola");  //b
console.log(companies);
companies.push("Amazon");  //c
console.log(companies);

