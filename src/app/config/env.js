const env = {
  database: 'is_db',
  username: 'projetadm',
  password: 'projetadm1122!',
  host: '138.197.123.65',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;