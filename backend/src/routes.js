const express = require('express');
const validations = require('./utils/validations');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validations.ongs, OngController.create);

routes.get('/profile', validations.profile, ProfileController.index);

routes.get('/incidents', validations.incidents.get, IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', validations.incidents.delete, IncidentController.delete);

module.exports = routes;
    
