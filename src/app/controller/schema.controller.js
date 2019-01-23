const db = require('../config/db.config.js');
const Schema = db.schemas;
 
// FETCH All
exports.findAll = (req, res) => {
	Schema.findAll().then(schemas => {
			res.json(schemas.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};