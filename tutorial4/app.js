function hello(){
    console.log("hello");
}
hello();

//rolling dice
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();

//arguments
function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("aditi", 21);
printInfo("aditi");

//return keyword
function sum(a,b){
    return a+b;
}
let s = sum(2,5);
console.log(s);

//concat all strings
// let str = ["hi", "hello", "bye", "!"];
// function concat(str){
//     let result = "";
//     for(let i=0;i<str.length();i++){
//         result+=str[i];
//     }
//     return result;
// }

//function expression
let sum2 = function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//higher order functions 

//1) takes one or more functions as arguments 
function multipleGreet(func, n){
    for(let i=0;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,20);

//2) returns a function.
function oddOrEven(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(n%2!=0);    //returns odd function
        }
        return odd;
    }
    else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);    //returns even function
        }
        return even;
    }
    else{
        console.log("Wrong request");   
    }
}
let request = "odd";
let func = oddOrEven(request);
func(3);
func(4);

//methods : actions that can be performed on an object
const calculator = {
    add : function(a, b){
        return a+b;
    },
    sub : function(a, b){
        return a-b;
    },
    mul : function(a, b){
        return a*b;
    }
}
console.log(calculator.add(5,6));

const calculator2 = {
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }
}
console.log(calculator.mul(5,6));

//this keyword : refers to an object that is executing the current piece of code
const student = {
    name: "aditi",
    age: 21,
    eng: 94.4,
    phy: 77,
    math:81,
    getAvg(){
        let avg = (this.eng + this.phy + this.math)/3;
        console.log(avg);
    }
};
student.getAvg();

//try and catch statements
//try : allows you to define a piece of code to be tested for errors while it is being executed
//catch : allows you to define a block of code to be executed, if an error occurs in the try block
try{
    console.log(a);
}
catch(e){
    console.log("Caught an error. Variable 'a' does not exist.")
    console.log(e);
}

//arrow function
const add = (a, b) => {
    console.log(a+b);
}
add(2,5);

//implicit return in arrow functions
const mul = (a, b) => (a*b);
console.log(mul(2,5));

//set timeout function 
console.log("hi there");
setTimeout( ()=> {
    console.log("aditi");   //callback function
}, 2000);   //timeout
console.log("welcome");

//set interval function
// let id = setInterval( ()=> {
//     console.log("hii aditi!");
// }, 1000);
//clearInterval(id);
//this with arrow function
const students = {
    name: "aditi",
    age: 21,
    marks: 94.4,
    getName: function(){
        console.log(this);  //students' scope
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent's scope ->window
        return this.marks;
    }
};
students.getName();
students.getMarks();

//write a function that prints "Hello World" 5 times at intervals of 2s each
let id = setInterval( () => {
    console.log("Hello World");
}, 2000);
setTimeout( () => {
    clearInterval(id);
}, 10000);