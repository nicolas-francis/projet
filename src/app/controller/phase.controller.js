const db = require('../config/db.config.js');
const Phase = db.phases;
 
// FETCH All
exports.findAll = (req, res) => {
	Phase.findAll().then(phases => {
			res.json(phases.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};