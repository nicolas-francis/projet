module.exports = function(app) {
    const orientations = require('../controller/orientation.controller.js');
    
    // Retrieve all orientations
    app.get('/api/orientations', orientations.findAll);
}