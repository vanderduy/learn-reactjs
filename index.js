const express = require("express");
const app = express();

require('./routes/authRoute')

//https://console.developers.google.com


require('../server/services/passport')(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT);
