// Créer l'api pour les projets
module.exports = function(app) {
    const projets = require('../controller/projet.controller.js');
    
    // Avoir tous les projets
    app.get('/api/projets', projets.findAll);

    // Créer un nouveau projet
    app.post('/api/projets', projets.create);

    // Supprimer un projet avec l'id
    app.delete('/api/projets/:id', projets.delete);

    // Avoir un seul projet avec l'id
    app.get('/api/projets/:id', projets.findById);

    // Modifier un projet avec l'id
    app.put('/api/projets', projets.update);
}