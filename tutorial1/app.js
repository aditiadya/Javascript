console.log("Hello Javascript!");

let a=10;
let b=20;
let output = `Total of a and b : ${a+b}`;   //template literals
console.log(output);

console.log('a'>'A');   //uni code is compared. A=41 a=61
console.log('*'>'&');

//truthy and falsy : Everything in js is either true or false in boolean context.
//Falsy value : false, 0, -0, On (BigInt value), "" (empty string), null, undefined, NaN (not a number)
//Truthy value : everything else


//alerts : displays alert message on the page
//alert("something is wrong");

//prompt : displays a dialog box that asks user for some input
let rollno = prompt("please enter your roll no.");
console.log(rollno);

//to give error manually
//console.error("There is a runtime error");

//to give warning manually
//console.warn("There is a warning");