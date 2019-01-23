// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Source = sequelize.define('pr_sources', {
	  source: {
			type: Sequelize.STRING
	  }
	});
	return Source;
}