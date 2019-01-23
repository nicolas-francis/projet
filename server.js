var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions));
 
const db = require('./src/app/config/db.config.js');
 
// Fichiers requis pour accéder aux tables de la BD
require('./src/app/route/projet.route.js')(app);
require('./src/app/route/user.route.js')(app);
require('./src/app/route/service.route.js')(app);
require('./src/app/route/source.route.js')(app);
require('./src/app/route/priorite.route.js')(app);
require('./src/app/route/schema.route.js')(app);
require('./src/app/route/orientation.route.js')(app);
require('./src/app/route/phase.route.js')(app);
require('./src/app/route/statut.route.js')(app);
 
// Créer le serveur sur le port 8080
var server = app.listen(8080, function () {
  let port = server.address().port;
 
  console.log("App listening on port", port);
})