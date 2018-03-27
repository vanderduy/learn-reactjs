const express = require("express")
// const mongoose =  require('mongoose')
// const cookieSession = require('cookie-session')
// const passport = require("passport");
// const key  =  require('./config/key')


// require('./models/User')

// mongoose.connect(key.mongoURI)

// //https://console.developers.google.com
// const app = express();

// app.use(cookieSession({
//     maxAge : 30*24*24*60*1000,
//     keys :[key.cookieKey]
// }))
// app.use(passport.initialize())
// app.use(passport.session())


// require('../server/services/passport')
// require('./routes/authRoute')(app)
const PORT = process.env.PORT || 5000

app.listen(PORT);
