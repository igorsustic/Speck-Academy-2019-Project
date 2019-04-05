// prazan array -dvorane- u koji cemo spremati objekte
var dvorane = [];
// objekt hala1
var hala1 = {
  ID: 1,
  name: "prva hala",
  reservation: {
    isReserved: false,
    reservedFrom: 0,
    reservedUntil: 0,
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
    isReserved: false,
    reservedFrom: 0,
    reservedUntil: 0,
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

// šaljemo nove objekte u prazni array "dvorane" 
dvorane.push(hala1, hala2, hala3, hala4, hala5);
// console.log(dvorane);

// prva funkcija "add"
function add(ime) {
  var ime = {
    ID: 6,
    name: ime,
    reservation: {
      isReserved: false,
      reservedFrom: 0,
      reservedUntil: 0,
    }
  }
  return dvorane.push(ime)
}

// druga funkcija "remove"
function remove(sifra) {
  for (i = 0; i <= dvorane.length - 1; i++) {
    if (sifra === dvorane[i].ID)
      return delete dvorane[i]
  }
}

// treća funkcija "reservation"
function reservation(sifra, rezervirano_od, rezervirano_do) {
  for (i = 0; i <= dvorane.length - 1; i++) {
    if (sifra === dvorane[i].ID) {
      return dvorane[i].reservedFrom = rezervirano_od,
        dvorane[i].reservedUntil = rezervirano_do
    }
  }
}

// četvrta funkcija "reservation"
function checkReservation(sifra) {
	var date = new Date();
	var timestamp = date.getTime();
  for (i = 0; i <= dvorane.length - 1; i++) {
    if (sifra === dvorane[i].ID) {
			if (dvorane[i].reservedUntil < timestamp) {
                return dvorane[i].reservedFrom = 0,
      		    dvorane[i].reservedUntil = 0,
                dvorane[i].isReserved = false
            }
		}
	}
}


console.log(dvorane);
