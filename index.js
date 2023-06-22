const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const dbString = process.env.DB_URL;
const routes = require('./routes/routes');

mongoose.connect(dbString);
const db = mongoose.connection;
db.once('connected', ()=>{
    console.log("DB connected")
});
db.on('error',(error)=>{
    console.log("Something went wrong : " + error);
});

const app = express();
app.use(express.json());
app.use('/api', routes);
app.listen(8080, () =>{
    console.log("Server started at 8080");
})
