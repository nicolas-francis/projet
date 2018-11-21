module.exports = (sequelize, Sequelize) => {
	const Projet = sequelize.define('pr_projets', {
	  no_projet: {
			type: Sequelize.STRING
	  },
	  desc_projet: {
			type: Sequelize.STRING
	  }
	});

	const Phase = sequelize.define('pr_phases', {
	  nom_phase: {
			type: Sequelize.STRING
	  },
	  desc_phase: {
			type: Sequelize.STRING
	  }
	});

	const Priorite_Strat = sequelize.define('pr_priorites_strategique', {
	  desc_priorite: {
			type: Sequelize.STRING
	  }
	});

	const Schema = sequelize.define('pr_schemas', {
	  desc_schema: {
			type: Sequelize.STRING
	  }
	});

	const Service = sequelize.define('pr_services', {
	  code_service: {
			type: Sequelize.STRING
	  },
	  desc_service: {
			type: Sequelize.STRING
	  }
	});

	const Source = sequelize.define('pr_sources', {
	  source: {
			type: Sequelize.STRING
	  }
	});

	const Statut = sequelize.define('pr_statuts', {
	  statut: {
			type: Sequelize.STRING
	  },
	  desc_statut: {
			type: Sequelize.STRING
	  }
	});
	
	//return Projet, Phase, Priorite_Strat, Schema, Service, Source, Statut;
	return Projet;
}