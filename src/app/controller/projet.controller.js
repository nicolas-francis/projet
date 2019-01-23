const db = require('../config/db.config.js');
const Projet = db.projets;
 
// FETCH All PROJECTS
exports.findAll = (req, res) => {
	Projet.findAll().then(projets => {
			res.json(projets.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// INSERT PROJECT
exports.create = (req, res) => {
	Projet.create({
				"no_projet": req.body.no_projet,
				"desc_projet": req.body.desc_projet,
				"indicateur_strategique": req.body.indicateur_strategique,
				"code_service": req.body.code_service,
				"priorite_service": req.body.priorite_service,
				"date_echeance": req.body.date_echeance,
				"priorite_strategique": req.body.priorite_strategique,
				"no_schema": req.body.no_schema,
				"no_orientation": req.body.no_orientation,
				"no_pti": req.body.no_pti,
				"no_financement": req.body.no_financement,
				"code_budgetaire": req.body.code_budgetaire,
				"statut_encours": req.body.statut_encours,
				"desc_statut_encours": req.body.desc_statut_encours,
				"statut_precedent": req.body.statut_precedent,
				"desc_statut_precedent": req.body.desc_statut_precedent,
				"titre_projet": req.body.titre_projet,
				"no_phase": req.body.no_phase,
				"partenaire": req.body.partenaire,
				"source": req.body.source,
				"suivi_par": req.body.suivi_par,
				"date_echeance_revisee": req.body.date_echeance_revisee
			}).then(projet => {
			res.json(projet);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// DELETE PROJECT
exports.delete = (req, res) => {
	const id = req.params.id;
	Projet.destroy({
			where: { id: id } }).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Project Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FIND PROJECT BY ID
exports.findById = (req, res) => {	
	Projet.findById(req.params.id).then(projet => {
			res.json(projet);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// UPDATE A PROJECT
exports.update = (req, res) => {
	const id = req.body.id;
	Projet.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Project Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};