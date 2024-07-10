//async and await

//async
async function greet(){
    return "hello";     //returns a promise
}
greet()
.then((result)=> {
    console.log("promise resolved.");
    console.log("result was : ", result);
})
.catch((error)=> {
    console.log("promise rejected with error : ", error);
})

let demo = async () => {
    return 5;   //returns a promise
};

//await : pause the execution of its surrounding async function until the promise is settled (resolved or rejected).
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let num = Math.floor(Math.random()*10)+1;
            if(num<5){
                reject("Promise rejected");
            }
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo2(){
    try{
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        getNum();
    }
    catch(error){
        console.log("error caught");
        console.log(error);
    }
    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);
}


demo2();