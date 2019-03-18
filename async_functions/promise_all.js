
function download(url) {
    return new Promise(function (resolve, reject) {
        if(!url.startsWith('http')){
            reject(new Error('Url does not start with http'))
        } else{
            console.log('Start Download : ' + url)
            setTimeout(function () { //3 sec download task
                let filename = url.split('/').pop()
                resolve(filename)
            },3000)
        }
    })
}

function resize(filename) {
    return new Promise(function (resolve, reject) {
        if(!filename.endsWith('.png')){
            reject(new Error("file is not png"))
        } else{
            console.log('Start Resize : ' + filename)
            setTimeout(function () {  //Fake 3-sec resize task

                let resizedfile = filename.split('.')[0] + "-resized.png"
                resolve(resizedfile)
            },3000)
        }
    })
}

function upload(resizedfilename){
    return new Promise(function (resolve,reject) {
        console.log('Start Upload : ' + resizedfilename)
        setTimeout(function(){ //Fake 3-sec upload task
            let uploadedUrl = "http://imgur.com/" + resizedfilename
            resolve(uploadedUrl)
        },3000)
    })
}


Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')

]).then(function (downloadvalues) {
    return Promise.all(downloadvalues.map(resize))

}).then(function (resizevalues) {
    return Promise.all(resizevalues.map(upload))
}).then(function (uploadvalues) {
    console.log(uploadvalues);
})
    .catch(function (err) { console.error(err) })
/*-------Hence in Promise.all() in the arguement an array of promise is passed and all peomises run parallely
* -------and their resolve value is stored as result in arguement of then()------*/
