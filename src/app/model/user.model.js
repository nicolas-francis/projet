module.exports = (sequelize, Sequelize) => {

	const User = sequelize.define('pr_utilisateurs', {
	  utilisateur: {
			type: Sequelize.STRING
	  },
	  mot_de_passe: {
			type: Sequelize.STRING
	  }
	});
	
	return User;
}