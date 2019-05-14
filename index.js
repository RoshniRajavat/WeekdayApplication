var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server

  Date.prototype.addDays = function (days) {
    var date = new Date();
    if (date.getDay() == days) {
      return date;
    } else {
      days = days - date.getDay();
    }
    date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  var date = new Date();

  if (req.url == '/') { //check the URL of the current request

    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write(`<html><body><p>Home</p></body></html>
        <a href="/sunday">Sunday</a></br>
        <a href="/monday">Monday</a></br>
        <a href="/tuesday">Tuesday</a></br>
        <a href="/wednesday">Wednesday</a></br>
        <a href="/thursday">Thursday</a></br>
        <a href="/friday">Friday</a></br>
        <a href="/saturday">Saturday</a></br>
        `);
    res.end();

  }
  else if (req.url == "/sunday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(0)}<p></p></body></html>`);
    res.end();
  }
  else if (req.url == "/monday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(1)}<p></p></body></html>`);
    res.end();

  }
  else if (req.url == "/tuesday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(2)}<p></p></body></html>`);
    res.end();

  }
  else if (req.url == "/wednesday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(3)}<p></p></body></html>`);
    res.end();

  } else if (req.url == "/thursday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(4)}<p></p></body></html>`);
    res.end();

  } else if (req.url == "/friday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(5)}<p></p></body></html>`);
    res.end();

  } else if (req.url == "/saturday") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body>${date.addDays(6)}<p></p></body></html>`);
    res.end();

  }

});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')