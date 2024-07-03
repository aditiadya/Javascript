//object literals
let delhi = {
    latitude: "28.7041° N",
    longtitude: "77.1025° E"
};
console.log(delhi);
console.log(delhi.latitude);

const student = {
    name: "aditi",
    age: 21,
    marks: 94.4,
    city: "delhi"
};
console.log(student);
student.city="mumbai";    //update
student.gender="female";    //add
delete student.marks;   //delete

//nested objects
const classInfo={
    aman: {
        grade:"A+",
        city:"Pune"
    },
    aditi: {
        grade:"O",
        city:"Delhi"
    },
    divyansh: {
        grade:"O",
        city:"Mumbai"
    }
}
console.log(classInfo.aditi.grade);

//array of objects
const classInfo2=[
    {
        name: "aman",
        grade:"A+",
        city:"Pune"
    },
    {
        name: "aditi",
        grade:"O",
        city:"Delhi"
    },{
        name: "divyansh",
        grade:"O",
        city:"Mumbai"
    },
]
console.log(classInfo2[1].city);
classInfo2[1].gender="Female";

//math object
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.pow(2,3));
console.log(Math.floor(12.6));  //rounds off to nearest smallest integer 
console.log(Math.floor(12.6));  //rounds off to nearest largest integer 
console.log(Math.random());     //random number between 0-1 (1 not included)
//generating random integer from 1-10
let num = Math.random(); 
num = num*10;
num = math.floor(num);
num=num+1;