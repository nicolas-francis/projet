// Créer l'api pour les sources
module.exports = function(app) {
    const sources = require('../controller/source.controller.js');

    // Avoir toutes les sources
    app.get('/api/sources', sources.findAll);
}