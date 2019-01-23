// Créer l'api pour les utilisateurs
module.exports = function(app) {
    const users = require('../controller/user.controller.js');

    // Avoir tous les utilisateur
    app.get('/api/users', users.findAll);

    // Avoir un seul utilisateur avec l'id
    app.get('/api/users/:id', users.findById);

    // Créer un nouvel utilisateur
    app.post('/api/users', users.create);

    // Modifier un utilisateur
    app.put('/api/users', users.update);

    // Supprimer un utilisateur avec l'id
    app.delete('/api/users/:id', users.delete);
}