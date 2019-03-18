
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


download('http://cb.lk/logo.png')
    .then(resize) //comment out this line to upload without resizing
    .then(upload)
    .then(function (uploadedUrl) {
        console.log("File was Uploaded To : " + uploadedUrl)
    })

.catch(function (err) {
        console.log(err);
})
