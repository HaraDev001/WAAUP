/* let fs = require('fs')*/

 var openfile=function(path, wb) {
    //wb:'r+','w+'
     var fs="";
     var buf = new Buffer(1024);
     fs.open(path, wb, function (err, fd) {
         if (err) {
             return console.error(err);
         }
         console.log("File opened successfully!");
         console.log("reading the file");

         fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
             if (err) {
                 console.log(err);
             }
             console.log(bytes + " bytes read");

             // Print only read bytes to avoid junk.
             if (bytes > 0) {
                 console.log(buf.slice(0, bytes).toString());
             }
         });
     });
 }

 var createfile=function(path){
    let writeStream = fs.createWriteStream(path,{
        flags: 'w'
    });
    writeStream.on('error', function (err) {
        console.log("createfile::"+err);
    });
}

 var readfile=function(path){
    let readStream = fs.createReadStream(path,{
        flags: 'w'
    });
    readStream.on('error', function (err) {
        console.log("readfile::"+err);
    });
}

 var removefile=function(path){
    try {
        fs.unlinkSync(path)
    } catch(err) {
        console.error(err)
    }
}

export default {
    data:{
        createfile,
        readfile,
        removefile,
        openfile
    }
}
