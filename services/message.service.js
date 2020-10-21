const messageModel = require('../db/models/message.model');

module.exports = {
    getAllMessages: (indexPage) => {

        const aggregateQuery = messageModel.aggregate();
        return messageModel.aggregatePaginate(aggregateQuery, {page: indexPage, limit: 10}, (err, result)=>{
            if (err){
                return err
            }
            return result;
        } );
    },
    createMessage: (messageText, email, id) => {
        return messageModel.create({id, email, messageText});
    },
    getMessageOfId(userId) {
        return messageModel.where({id: userId});
    }
};
