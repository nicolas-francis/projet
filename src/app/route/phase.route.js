module.exports = function(app) {
    const phases = require('../controller/phase.controller.js');
    
    // Retrieve all projects
    app.get('/api/phases', phases.findAll);
}