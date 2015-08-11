var fs = require('fs');


var text;




function readDir(pathName, extName, callback) {
   

  var test = fs.readdir(pathName, function doneReading(err, files){
    if(err)
      return callback(err)
    // var str = files.toString()
    // var lines = str.split('\n')
    var filtered = files.filter(function(value){
      return value.match("."+extName)
      
      // text = value.toString();
      // if(text.match("."+extName) != null) {
      //    console.log(text);
      // }
    });
    return callback(null, filtered)

  });
  console.log("ewfewfwf")
  console.log(test)

}

module.exports = readDir;
// readDir();
