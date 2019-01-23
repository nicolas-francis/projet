// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Orientation = sequelize.define('pr_orientation_strategique', {
	  no_orientation: {
			type: Sequelize.INTEGER
	  },
	  nom_orientation: {
			type: Sequelize.STRING
		},
		desc_orientation: {
			type: Sequelize.STRING
		}
	});
	return Orientation;
}