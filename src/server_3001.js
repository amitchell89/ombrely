var express = require('express')
var app = express()
var path    = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet')

// Helmet setup
app.use(helmet())
app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +'/../index.html'));
})

app.listen(3001, function () {
  console.log('Site listening on port 3001!')
})

