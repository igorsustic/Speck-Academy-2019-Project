const http = require('http');

const luxon = require('luxon');

var dvorane = require('./halls.js');

// provjera da li je neka od dvorana rezervirana, a ako je pushamo je u novi array "rezerviraneDvorane" 
var rezerviraneDvorane = [];
for (i = 0; i <= dvorane.length - 1; i++) {
    if (dvorane[i].reservation.isReserved === true) {
        rezerviraneDvorane.push(dvorane[i]);
    }
}

/* uzima prvi element array-a sa rezerviranim dvoranama i kreira varijablu sa 
"isReserved" vrijednosti kao string u definiranom formatu koju ćemo ispisati na serveru */
let prva = rezerviraneDvorane[0].reservation.reservedUntil;
var dt = luxon.DateTime.fromISO(prva);
var d = dt.toFormat('EEEE MMMM dd'); 
var dstring = d.toString();


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(dstring);
}).listen(3000);
