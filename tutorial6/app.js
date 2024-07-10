//callback hell -> callback nesting
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor){
    setTimeout(()=> {
        h1.style.color = color;
        nextColor();
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("green", 1000, ()=>{
        changeColor("purple", 1000, ()=>{
            changeColor("yellow", 1000, ()=>{
                changeColor("blue", 1000, ()=>{
                    changeColor("orange", 1000);
                });
            });
        });
    });
});

//promise chaining for above code
function changeColor(color, delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
}
changeColor("red", 1000)  //req-> promise object
    .then((result) => {
        console.log("result : ", result);
        return changeColor("green", 1000)
    })
    .then((result) => {
        console.log("result : ", result);
        return changeColor("purple", 1000)
    })
    .then((result) => {
        console.log("result : ", result);
        return changeColor("yellow", 1000)
    })
    .then((result) => {
        console.log("result : ", result);
        return changeColor("blue", 1000)
    })
    .then((result) => {

        console.log("result : ", result);
        return changeColor("orange", 1000)
    })
    .then((result) => {

        console.log("result : ", result);
        return changeColor("black", 1000)
    })
    .catch((error) => {
        console.log("some promise was rejected");
    });