var fs = require('fs')
 var arr = process.argv

function addOne() {
  fs.readFile(arr[2], function doneReading(err, fileContents){
    var str = fileContents.toString()
    var lines = str.split('\n')
    console.log(lines.length -1)
  })
}

addOne()
