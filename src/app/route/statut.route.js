module.exports = function(app) {
    const statuts = require('../controller/statut.controller.js');
    
    // Retrieve all statuts
    app.get('/api/statuts', statuts.findAll);
}