/*
const doItLater = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("This will demonstrate a promise");
        resolve();
    } , 2000);
})

doItLater.then(function() {
    console.log("promise is consumed");
})

const randomNumber = Math.random();
console.log(randomNumber);


new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 2000);
}).then(function() {
    console.log("task 2 completed");
})


new Promise((resolve,reject) => {
    let userError = true;
    if (!userError) {
        console.log("resolved");
        resolve();
    }else{
        console.log("rejected");
        reject("user error");
    }
}).then(function() {
    console.log("promise has been resolved");
}).catch(function(e) {
    console.log(e);
})
*/

//async await

async function connectDB() {
    try {
        const dbStatus = await new Promise(function (resolve, reject) {
            let userError = true;
            if (!userError) {
                setTimeout(() => {
                    //console.log("db connected");
                    resolve("db connected");
                }, 2000);
            } else {
                reject("some error");
            }
        })
    } catch (error) {
        console.log(error);
    }
    console.log(dbStatus)
}

connectDB();
