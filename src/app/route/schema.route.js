// Créer l'api pour les schemas
module.exports = function(app) {
    const schemas = require('../controller/schema.controller.js');

    // Avoir tous les schémas
    app.get('/api/schemas', schemas.findAll);
}