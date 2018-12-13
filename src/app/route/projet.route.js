module.exports = function(app) {
    const projets = require('../controller/projet.controller.js');
    
    // Retrieve all projects
    app.get('/api/projets', projets.findAll);

    // Create a new project
    app.post('/api/projets', projets.create);

    // Delete a project with Id
    app.delete('/api/projets/:id', projets.delete);
}