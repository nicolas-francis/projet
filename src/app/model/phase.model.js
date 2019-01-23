// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Phase = sequelize.define('pr_phases', {
	  nom_phase: {
			type: Sequelize.STRING
	  },
	  desc_phase: {
			type: Sequelize.STRING
		},
		no_phase: {
			type: Sequelize.INTEGER
		}
	});
	return Phase;
}