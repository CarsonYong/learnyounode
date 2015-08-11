var arr = process.argv
var sumNumber = 0
for (var i = 2; i < arr.length; i ++) {
  var number = arr[i];
  sumNumber += parseInt(number)
}
console.log (sumNumber);