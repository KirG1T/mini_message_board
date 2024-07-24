const { Router } = require('express');
const messageController = require('../controllers/messageController');
const messages = require('../messages');

const messagesRouter = Router();

messagesRouter.get('/', (req, res) => res.render('index', { data: messages }));
messagesRouter.get('/new', (req, res) => res.render('form'));
messagesRouter.post('/new', messageController);

module.exports = { messagesRouter, messages };
