const db = require('../config/db.config.js');
const Priorite = db.priorites;
 
//FETCH All
exports.findAll = (req, res) => {
	Priorite.findAll().then(priorites => {
			res.json(priorites.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};