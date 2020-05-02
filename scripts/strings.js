let single = 'hello';   //{ Same thing, next to no difference.
let double = "hello";   //{

/** BACKTICKS */
function sum(x, y){
    return x + y;
}
console.log(`1 + 2 = ${sum(1, 2)}.`);   //  Backticks allow us to embed any expression into the string, by wrapping it in ${}


let guestList = `Guests:                
- Harry
- Hermione
- Ronald
`;
console.log(guestList);                 //  Backticks also allow strings to span multiple lines. 



/** SPECIAL CHARACTERS */

//Newline
let guestList2 = "Guests:\n -Harry\n -Hermione\n -Ronald";      
console.log(guestList2);

//Quotes
console.log("\'")
console.log("\"")

//Tabs
console.log("Lorem \t epsum");

console.log("\x7A");    // '7A' is unicode for the hex value 7A (z)

//Unicode Character
console.log("\u{1F60D}");   //Unicode for the smiling heart emoji
console.log("\u00A9");      //Unicode for the copyright symbol


/** STRING METHODS */

let example = "AbCDefghijklmnopQRStuVwXyz";

//Length
console.log("String lenght is: " + example.length);


//Lowercase
let lowerCase = example.toLowerCase();  //Converts string to lowercase
console.log(lowerCase);

let singleLowerCase = example[0].toLowerCase(); //Stores and sonverts the character at index 0 to lowercase as a new string
let singleLowerCase2 = example[3].toLowerCase(); //Stores and sonverts the character at index 3 to lowercase as a new string
console.log(singleLowerCase);
console.log(singleLowerCase2);

//Index of
let example2 = "Widget with id";
let iOfExample = example2.indexOf('Widget');     //Returns 0 - input appears at index 0
let iOfExample2 = example2.indexOf('widget');    //Returns -1 as input does not appear in example (case sensitive)
let iOfExample3 = example2.indexOf('id', 2);     //Returns 12 as indexOf with second parameter indicates where it starts searching from.    
console.log(iOfExample);
console.log(iOfExample2);
console.log(iOfExample3);

//Includes
let example3 = "Today's forecast is more rain";
let x = example3.includes("forecast");      // True
let x2 = example3.includes("Forecast");     // False - case sensitive
let x3 = example3.includes("Today's", 1);   // False - search starts from index 1
console.log(x);
console.log(x2);
console.log(x3);

//Starts with
let x4 = example3.startsWith("T");          // True
let x5 = example3.startsWith("t");          // False - case sensitive
console.log(x4);
console.log(x5);

//Ends with
let x6 = example3.endsWith("rain");
let x7 = example3.endsWith("in");
console.log(x6);
console.log(x7);

//Getting a substring
let string1 = "2000 word limit";
let slicedString = string1.slice(0,5);      // Prints 2000
console.log(slicedString);


//Comparing strings
console.log('a' > 'Z');     //Lowercase always greater than uppercase   

let s1 = 'a';
let s2 = 'Z';
console.log(s1.codePointAt());      //shows numeric code for string (character) value.
console.log(s2.codePointAt());

//Search
let searchString = "Once upon a time, in a galaxy far far away.";
let value = searchString.search("away");       //returns position of search word if present. 
console.log(value);


