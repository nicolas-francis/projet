// Défini les champs et la table à aller chercher dans la BD
module.exports = (sequelize, Sequelize) => {
	const Service = sequelize.define('pr_services', {
	  code_service: {
			type: Sequelize.STRING
	  },
	  desc_service: {
			type: Sequelize.STRING
	  }
	});
	return Service;
}