var mymodule = require('./06_make_it_modular.js')
var fs = require('fs');
var path = process.argv[2];
var filter = process.argv[3];


// function readDir() {
   

//   fs.readdir(path, function doneReading(err, files){
//     // var str = files.toString()
//     // var lines = str.split('\n')
//     var filtered = files.filter(function(value){
//       text = value.toString();
//       if(text.match("."+filter) != null) {
//          console.log(text);
//       }
//     });
//   });
// }



mymodule(path, filter, function(err, data){
  // if(err ) 
  data.forEach(function(item){
    console.log(item) 
  })

});