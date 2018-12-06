module.exports = function(app) {
    const users = require('../controller/user.controller.js');

    // Retrieve all users
    app.get('/api/users', users.findAll);

    // Create a new user
    app.post('/api/users', users.create);

    // Update a user with Id
    app.put('/api/users', users.update);

    // Delete a user with Id
    app.delete('/api/users/:id', users.delete);
}