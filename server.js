// prazan array -dvorane- u koji cemo spremati objekte
var dvorane = [];

// objekt hala1
var hala1 = {
  ID: 1,
  name: "prva hala",
  reservation: {
    isReserved: true,
    reservedFrom: 100,
    reservedUntil: 200,
  }
}

// objekt hala2
var hala2 = {
  ID: 2,
  name: "druga hala",
  reservation: {
    isReserved: false,
    reservedFrom: 0,
    reservedUntil: 0,
  }
}
// objekt hala3
var hala3 = {
  ID: 3,
  name: "treca hala",
  reservation: {
    isReserved: true,
    reservedFrom: 200,
    reservedUntil: 500,
  }
}

// objekt hala4
var hala4 = {
  ID: 4,
  name: "cetvrta hala",
  reservation: {
    isReserved: false,
    reservedFrom: 0,
    reservedUntil: 0,
  }
}

// objekt hala5
var hala5 = {
  ID: 5,
  name: "peta hala",
  reservation: {
    isReserved: false,
    reservedFrom: 0,
    reservedUntil: 0,
  }
}

// šaljem nove objekte u prazni array "dvorane" 
dvorane.push(hala1, hala2, hala3, hala4, hala5);

// kreiram novi array od imena pojedinih hala (iz arraya "dvorane")
var imenaDvorana = [];
imenaDvorana.push(hala1.name, hala2.name, hala3.name, hala4.name, hala5.name);

// pretvaram "imenaDvorana" u string koji ćemo ispisivati na server...
var imenaDvoranaString = imenaDvorana.toString();


// SERVER
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(imenaDvoranaString);
}).listen(8080);


