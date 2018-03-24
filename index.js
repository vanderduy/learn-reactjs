const express = require("express")
const mongoose =  require('mongoose')
const key  =  require('./config/key')


require('./models/User')

mongoose.connect(key.mongoURI)

//https://console.developers.google.com
const app = express();
require('../server/services/passport')
require('./routes/authRoute')(app)
const PORT = process.env.PORT || 5000

app.listen(PORT);
