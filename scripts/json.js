/** JAVASCRIPT JSON */

let user = {
    id: 1,
    fName: "Harry",
    sName: "Potter",
    house: "Gryffindor",
    pet: "Hedwig"
}

// JSON
let value1 = JSON.stringify(user);                          //First parameter is the value you want to stringify
let value2 = JSON.stringify(user, ['fName', 'sName']);      //Second parameter is a replacer (chosing which elements to return)
let value3 = JSON.stringify(user, ['fName', 'sName'], 4);   //This value is for the spacing between elements

document.getElementById("feed1").innerHTML = value1;
document.getElementById("feed2").innerHTML = value2;
document.getElementById("feed3").innerHTML = value3;