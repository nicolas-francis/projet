module.exports = (sequelize, Sequelize) => {

	const Priorite = sequelize.define('pr_priorites_strategique', {
	  priorite: {
			type: Sequelize.INTEGER
	  },
	  desc_priorite: {
			type: Sequelize.STRING
	  }
	});
	
	return Priorite;
}