const db = require('../config/db.config.js');
const Service = db.services;
 
//FETCH All
exports.findAll = (req, res) => {
	Service.findAll().then(services => {
			res.json(services.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};