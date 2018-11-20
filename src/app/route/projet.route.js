module.exports = function(app) {
    const projets = require('../controller/projet.controller.js');
    
    // Retrieve all Customer
    app.get('/api/projets', projets.findAll);
}