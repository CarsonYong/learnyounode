var fs = require('fs')
var arr = process.argv
var buffer = fs.readFileSync(arr[2])
var str = buffer.toString()
var lines = str.split('\n')
console.log("test")
console.log(lines.length -1)

