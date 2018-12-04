module.exports = function(app) {
    const sources = require('../controller/source.controller.js');

    // Retrieve all sources
    app.get('/api/sources', sources.findAll);
}