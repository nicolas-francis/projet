module.exports = function(app) {
    const schemas = require('../controller/schema.controller.js');

    // Retrieve all users
    app.get('/api/schemas', schemas.findAll);
}