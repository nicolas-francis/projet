const db = require('../config/db.config.js');
const User = db.users;
 
// FETCH All
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			res.json(users.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};

// FIND USERNAME
// seulement utiliser findById ???
exports.findUser = (req, res) => {
	User.findUser(req.params.username).then(user => {
		res.json(user);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// FIND USER BY ID
exports.findById = (req, res) => {	
	User.findById(req.params.id).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// INSERT USER
exports.create = (req, res) => {
	User.create({
				"utilisateur": req.body.utilisateur, 
				"mot_de_passe": req.body.mot_de_passe
			}).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// UPDATE USER
exports.update = (req, res) => {
	const id = req.body.id;
	User.update(req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// DELETE USER
exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
			where: { id: id } }).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};