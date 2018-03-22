const express = require('express')
const app = express();

const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy 
//https://console.developers.google.com

//clinetID 435164350783-bofsr4rolh7vebvcpfktl65o11nhhtpp.apps.googleusercontent.com
//clinetSecret kdQ7AxCXoyIve3K-mX1Vi27A

passport.use(new googleStrategy())


const PORT = process.env.PORT || 5000

app.listen(PORT)