/** NUMBER METHODS */

let num = 9.99999;
console.log("Number: " + [num]);

//Converting from a number to a string.
let string = num.toString();
console.log("String: " + [string]);

//Converting from a number to an exponentional.
let x = num.toExponential();
console.log("Exponential: " + [x]);

//Converting from a number to a String with a specified number of digits.
let f1 = num.toFixed(1);
console.log("Fixed(1): " + [f1]);
let f5 = num.toFixed(5);
console.log("Fixed(5): " + [f5]);

//Converting from a number to a String with a specified length.
let p5 = num.toPrecision(5);
console.log("Precision(5): " + [p5]);
let p7 = num.toPrecision(7);
console.log("Preceision(7) " + [p7]);

//Converting variables to numbers
let num1 = true;
let num10 = Number(num1)
console.log(num10);     //returns 1

let num2 = false;
let num20 = Number(num2)
console.log(num20);     //returns 0

let num3 = "10";
let num30 = Number(num3)
console.log(num30);     //returns 10

let num4 = " 10";
let num40 = Number(num4);
console.log(num40);     //returns 10;


//Returning max number value
let max = Number.MAX_VALUE;
console.log(max);

//Returning min number value
let min = Number.MIN_VALUE;
console.log(min);

