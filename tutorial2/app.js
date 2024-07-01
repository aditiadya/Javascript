let msg = "    Hello World   ";
console.log(msg.trim());

let name1 = "aditi adya";
console.log(name1.toUpperCase());

let name2 = "ADITI ADYA";
console.log(name2.toLowerCase());

console.log(name2.indexOf('D'));  // first occurence of 'D'

console.log(name2.includes('DYA'));
console.log(name2.includes('DYAZ'));

//method chaining
let msg2 = "    Hello World   ";
console.log(msg2.trim());
console.log(msg2.toUpperCase());
console.log(msg2.toUpperCase().trim());     // both methods can be applied at once

let str='IloveCoding';
console.log(str.slice(1,5));    //returns part of the original string from position 1 to 4
console.log(str.slice(-3));    //=> 10-3=7, so 7th index onwards will get printed

console.log(str.replace('love','do'));    //only first occurence is replaced

let str3='Coding';
console.log(str3.repeat(3));    //returns part of the original string from position 1 to 4

let students = ["aditi", "divyansh", "archita", "adarsh", "agrima"];
console.log(students);

let info = ["aditi", 26, 26.7];
let arr=[];     //empty array
arr.push(5);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(6);     //add to start
console.log(arr);
arr.shift(6);       //delete from start and returns it
console.log(arr);

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];

console.log(num2.includes(8));

console.log(num1.concat(num2));

console.log(num1.reverse());

console.log(num1.slice(0,4));

let num3 = [1,2,3,4,5];
console.log(num3.splice(0,2,"a","XyZ"));
console.log(num3);

let num4 = [5,7,1,8,3];
console.log(num4.sort());

const arr2 =[1,2,3];

let num5 = [[1,2],[3,4,5],[6,7],[8,9]];
console.log(num5);