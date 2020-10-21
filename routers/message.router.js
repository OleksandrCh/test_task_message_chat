const Router = require('express').Router();

const messageControllers = require('../controllers/messages.controller');


Router.get('/messages/list',  messageControllers.getAllMessages);

Router.get('/messages/single/:id', messageControllers.getOnceMessagesOfId);

Router.post('/message', messageControllers.createMessage);

module.exports = Router;
