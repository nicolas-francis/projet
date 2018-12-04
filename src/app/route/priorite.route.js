module.exports = function(app) {
    const priorites = require('../controller/priorite.controller.js');

    // Retrieve all priorites
    app.get('/api/priorites', priorites.findAll);
}