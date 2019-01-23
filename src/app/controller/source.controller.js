const db = require('../config/db.config.js');
const Source = db.sources;
 
// FETCH All
exports.findAll = (req, res) => {
	Source.findAll().then(sources => {
			res.json(sources.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};