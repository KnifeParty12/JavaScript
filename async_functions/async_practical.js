/*------Practical Use of Asynchronous Programning------*/

function downloadFile(url,downloaded) {
    // We are downloading the file here
    // Let's assume it takes 3 seconds to download
    // we use setTimeout to generate fake delay

    console.log("Downloaded file " + url);
    setTimeout(function(){
        let filePath = "C:\\Windows\\xyz.txt";
        console.log("File was downloaded to: " + filePath);
        downloaded(filePath)
    },3000)
}

function resizeFile(filepath,resized){
    //we are resizing the file.It takes 2 sec
    //we again use a fake delay using setTimeout for

    console.log("We are resizing: " +filepath);
    setTimeout(function () {
        let newpath = filepath.split(".")[0] + "-resized-" + filepath.split(".")[1]
        resized(newpath)
    },3000)

}

downloadFile("http://google.com/logo.png", function(downloadedpath){
    resizeFile(downloadedpath, function (path) {
        console.log("Resized file is at: " + path)
    });
});

