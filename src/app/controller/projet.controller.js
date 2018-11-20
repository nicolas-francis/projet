const db = require('../config/db.config.js');
const Projet = db.projets;
 
// FETCH All
exports.findAll = (req, res) => {
	Projet.findAll().then(projets => {
			res.json(projets.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};