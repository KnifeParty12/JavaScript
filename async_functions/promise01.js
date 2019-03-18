
function someAsyncTask(callback){
    console.log('Beginning of Task')
    setTimeout(function () {
        console.log('End Of Task')
        callback();
    },3000)
}

/*-----Promisifying a Async function into a promise----*/

let someTaskPromise = function() {
    return  new Promise(function (resolve, reject) {
        someAsyncTask(resolve)
    })
}

someTaskPromise().
then(function (value) {
    console.log("After Task is Complete");
})
