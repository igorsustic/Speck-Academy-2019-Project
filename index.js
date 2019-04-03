// SERVER

let express = require('express');
const app = express();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
   res.send('Hello world');
});

app.listen(4000, () => console.log('Hello world 4000!'));

var dvorane = require('./halls.js');

app.get('/halls', function (req, res) {
res.json(dvorane);
})