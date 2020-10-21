const mongoose = require('mongoose');
module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/message', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        const db = mongoose.connection;
        db.on('error', (err) => {
            console.log('Error DB connect ', err)
        })
    } catch (e) {
        console.log(e)
    }

};
