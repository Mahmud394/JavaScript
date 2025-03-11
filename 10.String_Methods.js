// str.toUpperCase( )  -> lower case to upper case
let str = "Bangladesh";
console.log("Orginal string :",str);
console.log(str.toUpperCase( ));

// str.toLowerCase( ) -> upper to lower case
console.log(str.toLowerCase( ) );

// str.trim( ) // removes whitespaces
let str1 = "  Bangladesh  ";
console.log(str1.trim( ));

// str.slice(start, end?) // returns part of string
console.log(str.slice(1, 5) );  // 1 to 5-1

// str1.concat( str2 ) // joins str2 with str1
let str2 = "hello";
let str3= "Google";
console.log(str2.concat( str3 ) );  // str2 + str3

// str.replace( searchVal, newVal )
let str4 = "helloNewWorld";
console.log(str4.replace( "h","y" ));
console.log(str4.replaceAll( "l","i" ));

// str.charAt( idx )
let str5 = "IloveU";
console.log(str5.charAt( 3 ));

/*
Let‘s Practice
Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
*/
let fullName = prompt("Enter your Full Name without spaces");
let userName = "@" + fullName + fullName.length;
console.log("UserName :",userName);
