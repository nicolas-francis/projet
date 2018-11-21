var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./src/app/config/db.config.js');

//A ENLEVER PLUS TARD SEULEMENT POUR TEST *****
//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 
require('./src/app/route/projet.route.js')(app);
 
//Create a Server
var server = app.listen(8080, function () {
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
//A ENLEVER PLUS TARD SEULEMENT POUR TEST *****
function initial(){
  let projets = [
    {
      no_projet: "CE-001",
      desc_projet: "PROJET 1",
      indicateur_strategique: "strat"
    },
    {
      no_projet: "CE-002",
      desc_projet: "PROJET 2",
      indicateur_strategique: "strat"
    },
    {
      no_projet: "CE-003",
      desc_projet: "PROJET 3",
      indicateur_strategique: "strat"
    },
    {
      no_projet: "CE-004",
      desc_projet: "PROJET 4",
      indicateur_strategique: "strat"
    },
    {
      no_projet: "CE-005",
      desc_projet: "PROJET 5",
      indicateur_strategique: "strat"
    },
  ]
 
  //A ENLEVER PLUS TARD SEULEMENT POUR TEST *****
  //Init data -> save to PostgreSQL
  const Projet = db.projets;
  for (let i = 0; i < projets.length; i++) { 
    Projet.create(projets[i]);  
  }
}