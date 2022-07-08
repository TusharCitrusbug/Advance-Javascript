// var http = require('http');
// var fs = require('fs');
// // http.createServer(function (req, res) {
// //   fs.readFile('demofile1.html', function(err, data) {
// //     console.log(data,"()()()()");
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write(data);
// //     return res.end();
// //   });
// // }).listen(8080); 


// http.createServer(function (req, res) {
//     fs.appendFile('demofile1.txt', 'Hello content!', function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//           });
//   }).listen(8080); 
// // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   });
  
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);
// console.log(q.query.year);
/*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);


// creating events

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the eventhandler to an event:
// eventEmitter.on('c', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('c');


