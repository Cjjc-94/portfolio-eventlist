const express = require('express')
const event = require('./controllers/events.controllers');
const router = express.Router();

router.get('/events', event.getEvents);
router.post('/events', event.createEvents);

module.exports =router