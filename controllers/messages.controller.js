const uuid = require('uuid');

const messageService = require('../services/message.service');

module.exports = {
    getAllMessages: async (req, res) => {
        try {
            const {indexPage} = req.query;
            let messages = await messageService.getAllMessages(indexPage);

            res.json({messages});
        } catch (e) {
            res.json({e});
        }
    },

    getOnceMessagesOfId: async (req, res) => {
        try {
            const {id: messageId} = req.params;

            let message = await messageService.getMessageOfId(messageId);
            let onceMessage = message[0];

            res.json({onceMessage});
        } catch (e) {
            res.json({e});
        }
    },

    createMessage: async (req, res, next) => {
        try {
            const {messageText, email} = req.body;
            const idRandom = uuid.v1();

            const {id} = await messageService.createMessage(messageText, email, idRandom);

            res.json({id});
        } catch (e) {
            res.json({e});
        }

    }
};
