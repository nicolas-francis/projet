// Créer l'api pour les services
module.exports = function(app) {
    const services = require('../controller/service.controller.js');

    // Avoir tous les services
    app.get('/api/services', services.findAll);
}