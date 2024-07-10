// *******************************************THEORY**************************************************

//promises : the promise object represents the eventual completion (or failure) of an asynchronous operation and its resuling value.
//promises are used to get rid of callback hell.
//it has 2 functions : resolve(success) and reject(failure).
//promise has 3 states : 1)pending  2)rejected(error)  3)fulfilled(resolved)

// *******************************************CODE**************************************************
// function savetoDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10 + 1);
//     if (internetspeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }
//callback hell
// savetoDb("hello world",
//     () => {
//         console.log("success : your data was saved");
//         savetoDb("I'm aditi.",
//             () => {
//                 console.log("success2 : data2 was saved");
//                 savetoDb("How are you?",
//                     () => {
//                         console.log("success3 : data3 was saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection. data3 was not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection. data2 was not saved");
//             }
//         );
//     },
//     () => {
//         console.log("failure : weak connection. data not saved");
//     }
// );


//to get rid of the above code which is very lengthy, we use promises
function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10 + 1);
        if (internetspeed > 4) {
            resolve("data was saved.");
        }
        else {
            reject("weak connection");
        }
    });
}

//promise chaining
savetoDb("hello world")  //req-> promise object
    .then((result) => {
        console.log("data1 saved.");
        console.log("result : ", result);
        return savetoDb("I'm aditi")
    })
    .then((result) => {
        console.log("data2 saved.");
        console.log("result : ", result);
        return savetoDb("How are you?")
    })
    .then((result) => {
        console.log("data3 saved.");
        console.log("result : ", result);
    })
    .catch((error) => {
        console.log("some promise was rejected");
        console.log("error : ", error);
    });