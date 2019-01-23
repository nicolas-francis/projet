// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Projet = sequelize.define('pr_projets2', {
	  no_projet: {
			type: Sequelize.STRING
		},
		desc_projet: {
				type: Sequelize.STRING
		},
		indicateur_strategique: {
			type: Sequelize.STRING
		},
		code_service: {
			type: Sequelize.STRING
		},
		priorite_service: {
			type: Sequelize.STRING
		},
		date_echeance: {
			type: Sequelize.DATE
		},
		priorite_strategique: {
			type: Sequelize.INTEGER
		},
		no_schema: {
			type: Sequelize.INTEGER
		},
		no_orientation: {
			type: Sequelize.INTEGER
		},
		no_pti: {
			type: Sequelize.STRING
		},
		no_financement: {
			type: Sequelize.STRING
		},
		code_budgetaire: {
			type: Sequelize.STRING
		},
		statut_encours: {
			type: Sequelize.INTEGER
		},
		desc_statut_encours: {
			type: Sequelize.STRING
		},
		statut_precedent: {
			type: Sequelize.INTEGER
		},
		desc_statut_precedent: {
			type: Sequelize.STRING
		},
		titre_projet: {
			type: Sequelize.STRING
		},
		no_phase: {
			type: Sequelize.INTEGER
		},
		partenaire: {
			type: Sequelize.STRING
		},
		source: {
			type: Sequelize.STRING
		},
		suivi_par: {
			type: Sequelize.STRING
		},
		date_echeance_revisee: {
			type: Sequelize.DATE
		}
	});
	return Projet;
}