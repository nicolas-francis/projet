// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Statut = sequelize.define('pr_statuts', {
	  statut: {
			type: Sequelize.STRING
	  },
	  desc_statut: {
			type: Sequelize.STRING
		},
		no_statut: {
			type: Sequelize.INTEGER
		}
	});
	return Statut;
}