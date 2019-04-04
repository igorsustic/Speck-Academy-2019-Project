// SERVER

let express = require('express');
const app = express();
let bodyParser = require('body-parser');

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serviramo fajlove iz public foldera
app.use('/', express.static('public'));


// importamo array dvorane iz halls.js
var dvorane = require('./halls.js');

app.get('/halls', function (req, res) {
res.json(dvorane);
})

// CREATE HANDLER
app.post('/hallsCreate', function (req, res) {
   var uniqid = Date.now();
   var novaHala = {
      name: req.body.imeDvorane,
      ID: uniqid
   }
   dvorane.push(novaHala);
   res.redirect("/halls");
})


app.listen(4000, () => console.log('Hello world 4000!'));

// type: datetime-local
// type: number
// parseInt(req.body.name)
