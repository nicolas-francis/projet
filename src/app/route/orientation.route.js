// Créer l'api pour les orientations
module.exports = function(app) {
    const orientations = require('../controller/orientation.controller.js');
    
    // Avoir toutes les orientations
    app.get('/api/orientations', orientations.findAll);
}