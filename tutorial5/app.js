//array methods

//forEach method
let arr = [1,2,3,4,5];
let print = function (el){
    console.log(el);
};
arr.forEach(print);

//map function
let students = [
    {
        name: "aditi",
        marks: 94.4,
    },
    {
        name: "divyansh",
        marks: 97,
    },
    {
        name: "archita",
        marks: 96,
    }
];
let gpa = students.map((el)=> {
    return el.marks/10;
});
console.log(gpa);

//filter function 
let nums = [1,2,3,4,5,6,7,8,9,10];
let even2 = nums.filter((el)=> {
    return el%2==0;     //even->true, odd->false
});
console.log(even2);

//every function : returns true value if every element of array gives true for some function. else return false
console.log([2, 4, 6].every((el)=>el%2==0));
console.log([2, 4, 6, 1].every((el)=>el%2==0));
console.log([1, 3, 5].every((el)=>el%2!=0));
console.log([1, 3, 5, 2].every((el)=>el%2!=0));

//some function : returns true if some elements of array give true for some functions. else return false
console.log([1, 3, 5, 2].some((el)=>el%2!=0));
console.log([2, 4, 6].every((el)=>el%2!=0));

//reduce function : reduces an array to a single value
console.log([1,2,3,4,5].reduce((res,el)=>res+el));      //works like ans+=element in loop (C++ refernce)

let nums2 = [1,2,3,4,5,6,7,8,9,10];
let ans = nums2.reduce((max, el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(ans);

//default parameters
function sum(a,b=3){
    return a+b;
}
console.log(sum(1,7));
console.log(sum(1));

//spread function : expands an iterable into multiple values
let nums3 = [1,2,3,4,5,6,7,8,9,10];
console.log(Math.min(...nums3));
console.log(..."aditi");

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums4=[...odd,...even];
console.log(nums4);

//rest : allows a function to take indefinite number of arguments and bundle them in an array
function sum3(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us : ", args[i]);
    }
}

//destructuring : storing values of array into multiple variables
let names = ["tony", "bruce", "peter", "steve"];
let [winner, firstRunnerUp, ...others] = names;
console.log(winner);
console.log(firstRunnerUp);
console.log(others);

const student = {
    name: "aditi",
    age: 21,
    class: 10,
    subjects: ["hindi","english","maths","science"],
    username: "aditiadya",
    password: "1234",
};
let {username: user, password: secret, city: place="delhi"}=student;
