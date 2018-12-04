const db = require('../config/db.config.js');
const Statut = db.statuts;
 
// FETCH All
exports.findAll = (req, res) => {
	Statut.findAll().then(statuts => {
			res.json(statuts.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};