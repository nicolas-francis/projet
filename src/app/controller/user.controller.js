const db = require('../config/db.config.js');
const User = db.users;
 
//FETCH All
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			res.json(users.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};

//FIND USERNAME
exports.findUser = (req, res) => {
	User.findUser(req.params.username).then(user => {
		res.json(user);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};