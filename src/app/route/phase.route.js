// Créer l'api pour les phases
module.exports = function(app) {
    const phases = require('../controller/phase.controller.js');
    
    // Avoir toutes les phases
    app.get('/api/phases', phases.findAll);
}