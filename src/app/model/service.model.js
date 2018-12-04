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