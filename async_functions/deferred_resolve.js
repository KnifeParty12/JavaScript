
function downloadPromise() {
return new Promise(function (resolve, reject) {
    console.log('Starting to download file')
    setTimeout(function () {
        console.log('Download was complete')
        resolve();         // What happens when we call resolve ?
    },3000)
})
}

let downloadedFile = downloadPromise();   // Storing return expressions of downloadPromise into a variable

setTimeout(function () {
    downloadedFile.then(function (value) {
        console.log("After Download is Complete")
    })
},5000) /*---Means 2 sec after downloadPromise() is executed .then() function will
                 ---- execute */
