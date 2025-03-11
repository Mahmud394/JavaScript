// Create Array
let marks = [ 96, 75, 48, 83, 66 ];
console.log(marks);
console.log(marks.length);

let heroes = [ "ironman","hulk","superman","antman"];
console.log(heroes);
console.log(heroes[0]);
heroes[0] = "thor";
console.log(heroes[0]);

// print array
for(let i = 0; i < marks.length ; i++){  // for loop
    console.log(marks[i]);
}

for(let idx of heroes){  // for of loop
    console.log(idx);
}
for(let idx of heroes){
    console.log(idx.toUpperCase());
}

/*
Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/
let mark = [ 85, 97, 44, 37, 76 , 60 ];
let sum = 0;
for(let i = 0; i < marks.length ; i++){  // for loop
    sum += mark[i];
}
console.log(`sum of marks of the entire class ${sum}`);
let ave = sum/marks.length ;
console.log(`average marks of the entire class ${ave}`);

/*
Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
*/
let item = [250, 645, 300, 900, 50];
for(let i = 0; i < item.length ; i++){  // for loop
    let offer = item[i]/10;
    item[i] -= offer;
}
console.log(item);