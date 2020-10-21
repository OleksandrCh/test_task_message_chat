const express = require('express');

const app = express();

const connectDB = require('./db/connectDB');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();

const routerMessage = require('./routers/message.router');

app.use(routerMessage);

app.listen(3000, (err)=>{
   if (err) {
       throw new Error(err)
   } else {
       console.log('Server running! Port 3000.')
   }
});
