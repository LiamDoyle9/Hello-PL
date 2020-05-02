/** JAVASCRIPT ARRAYS */

let arr = new Array();      // {    There are two syntaxes for creating an empty array
let arr2 = [];              // {


//Accessing array elements
console.log(" *** ACCESSING ARRAY ELEMENTS ***");
let fruits = ["Apples", "Oranges", "Bananas"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Updating array elements
console.log(" *** UPDATING ARRAY ELEMENTS *** ");
fruits[0] = "Bananas";
fruits[1] = "Apples";
fruits[2] = "Oranges";
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);

//Add new element to array
console.log(" *** ADD NEW ELEMENT TO ARRAY *** ");
fruits[3] = "Kiwi";
    console.log(fruits);    

//Counting number of elements in an array
console.log(" *** COUNT ARRAY ELEMENTS *** ");
console.log(fruits.length);


/** ARRAY METHODS */

let array = [1,2,3,4,5,6,7,8,9];

//push
console.log(" *** PUSH *** ");
console.log("Array BEFORE push: " + array);
array.push(10);
console.log("Array AFTER push: " + array);

//pop
array = [1,2,3,4,5,6,7,8,9];
console.log(" *** POP *** ");
console.log("Array BEFORE pop: " + array);
array.pop();
console.log("Array AFTER pop: " + array);

//shift
array = [1,2,3,4,5,6,7,8,9];
console.log(" *** SHIFT *** ");
console.log("Array BEFORE shift: " + array);
array.shift();
console.log("Array AFTER shift: " + array);

//unshift
array = [2,3,4,5,6,7,8,9];
console.log(" *** UNSHIFT *** ");
console.log("Array BEFORE unshift: " + array);
array.unshift(1);
console.log("Array AFTER unshift: " + array);

//splice
console.log(" *** SPLICE (REMOVING ELEMENTS) *** ");
array = [1,2,3,4,5,6,7,8,9];
console.log("Array BEFORE splice: " + array);
array.splice(0,3);                                              //Starting from index 0, remove 3 elements
console.log("Array AFTER splice: " + array);

console.log(" *** SPLICE (ADDING ELEMENTS) *** ");
array = [3,4,5,6,7,8,9];
console.log("Array BEFORE splice: " + array);
array.splice(0, 0, 0, 1, 2);                                    //Starting form index 0, remove 0 elements, then add 0, 1, 2
console.log("Array AFTER splice: " + array);

//slice
console.log(" *** SLICE *** ");
array = ["Hermione", "Ron", "H-dawg"];
console.log("Array: " + array);
console.log("Sliced Array: " + array.slice(0,1));               //Makes copy of relevent index (DOES NOT DELETE / REMOVE THEM)

//concatenation
console.log(" *** CONCATENATION *** ");
let array1 = ["Harry"];
let array2 = ["Potter"];
console.log("Array 1: " + array1);
console.log("Array 2: " + array2);
console.log("Array 1 concatenated with Array 2: " + array1.concat(array2));

//find
console.log(" *** FIND *** ");
array = [1,2,3,4,5,6,7,8,9];

let found = array.find(function(element){
    return element > 2;
});
console.log("Array: " + array);
console.log("Found: " + found);                 // Returns the FIRST element that matches the function criteria. 

//filter
console.log(" *** FILTER *** ");
array = [1,2,3,4,5,6,7,8,9];
console.log(array);

function myFunc(value){
    return value > 5;
}

function myFunc2(){
    let y = array.filter(myFunc);
    console.log(y);
}

console.log("Filtered array: " + myFunc2());

//looping over arrays
console.log(" *** LOOPING OVER ARRAYS *** ");
array = [1,2,3,4,5,6,7,8,9];
for(let key in array){
    console.log(array[key]);
}

//multidimensional arrays
console.log(" *** MULTIDEMENSIONAL ARRAYS *** ");
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log("Matrix index [1],[1]: " + matrix[1][1]);       //5

//map
console.log(" *** MAP ***");            //Map method calls a function for each element of the array and returns the results in a new array. 
console.log("Array: " + array);
result = array.map(item => item * item);
console.log(result);

//sort
console.log(" *** SORT ***");
array = [1,2,15];
console.log(array);
let sortedArray = array.sort();
console.log(sortedArray);