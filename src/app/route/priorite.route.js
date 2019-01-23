// Créer l'api pour les priorités
module.exports = function(app) {
    const priorites = require('../controller/priorite.controller.js');

    // Avoir toutes les priorités
    app.get('/api/priorites', priorites.findAll);
}