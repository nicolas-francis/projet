module.exports = (sequelize, Sequelize) => {
	const Projet = sequelize.define('pr_projets', {
	  no_projet: {
			type: Sequelize.STRING
	  },
	  desc_projet: {
			type: Sequelize.STRING
	  },
	  indicateur_strategique: {
		  type: Sequelize.STRING
		}
	});
	
	return Projet;
}