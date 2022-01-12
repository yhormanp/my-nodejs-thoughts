const express = require('express');
const { sessionsPost } = require('../controllers/sessions');


function sessionsApi(app){
    const router = express.Router();

    app.use('/api/sessions', router);

    router.post('/', sessionsPost );
}

module.exports = sessionsApi;