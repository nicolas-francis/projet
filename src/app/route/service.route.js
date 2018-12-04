module.exports = function(app) {
    const services = require('../controller/service.controller.js');

    // Retrieve all services
    app.get('/api/services', services.findAll);
}