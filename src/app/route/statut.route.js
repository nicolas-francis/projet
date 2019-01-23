// Créer l'api pour les status
module.exports = function(app) {
    const statuts = require('../controller/statut.controller.js');
    
    // Avoir tous les status
    app.get('/api/statuts', statuts.findAll);
}