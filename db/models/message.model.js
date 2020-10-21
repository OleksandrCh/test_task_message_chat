const {Schema, model} = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const {EMAIL} = require('../../constants/regex.email');

const MessageSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: EMAIL
    },
    messageText: {
        type: String,
        minlength: 100,
        $isEmpty: true,
    },
},  {
    collection: "messages",
    timestamps: true
});
MessageSchema.plugin(aggregatePaginate);

module.exports = model('message', MessageSchema);
