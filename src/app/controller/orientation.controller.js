const db = require('../config/db.config.js');
const Orientation = db.orientations;
 
// FETCH All
exports.findAll = (req, res) => {
	Orientation.findAll().then(orientations => {
			res.json(orientations.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};