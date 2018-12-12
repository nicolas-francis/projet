module.exports = function(app) {
    const projets = require('../controller/projet.controller.js');
    
    // Retrieve all projects
    app.get('/api/projets', projets.findAll);

    // Create a new user
    app.post('/api/projets', projets.create);
}