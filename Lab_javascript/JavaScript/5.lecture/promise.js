function promiseTimeout(ms){
    return new Promise ((resolve,reject) =>{
        setTimeout(reject,ms);
    });
}

promiseTimeout(2000)
.then(() => {
    console.log("Done!!");
    return promiseTimeout(1000);
})
.then(() => {
    console.log("Also done!!");
    return promise.reolve(42);
})
.then(() => {
    console.log(reolve);
})
.then(() => {
    console.log("Error!");
})