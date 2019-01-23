// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Schema = sequelize.define('pr_schemas', {
	  no_schema: {
			type: Sequelize.INTEGER
	  },
	  desc_schema: {
			type: Sequelize.STRING
	  }
	});
	return Schema;
}