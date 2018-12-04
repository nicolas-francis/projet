const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  },

  define: {
    timestamps: false
  }
});

const db = [];

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.projets = require('../model/projet.model.js')(sequelize, Sequelize);
db.users = require('../model/user.model.js')(sequelize, Sequelize);

module.exports = db;