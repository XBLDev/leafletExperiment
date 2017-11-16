const express = require('express');
const bodyParser = require('body-parser');

var path = require('path');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

const LatLongRequestRoutes = require('./server/routes/LatLongRequest');
app.use('/LatLongRequest', LatLongRequestRoutes);

app.route('/*').get(function(req, res) { 
  return res.sendFile(path.join(__dirname, './server/static/index.html')); 

});

// start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});