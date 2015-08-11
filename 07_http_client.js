var http = require('http');
var host = process.argv[2];


var options = {
  host: host
};

http.get(host, function(response) {
  // console.log("Got response: " + response.statusCode);
  response.setEncoding('utf-8');
  response.on('data', function(chunk){
    console.log(chunk);
  })
});
// }).on('error', function(e) {
//   console.log("Got Error: " + e.message);
// });
