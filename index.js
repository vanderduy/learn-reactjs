const express = require("express");
const app = express();

const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
//https://console.developers.google.com
const key = require("./config/key");

passport.use(
  new googleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken , profile, done )=> {
      console.log('accessToken :' , accessToken);
      console.log('refreshToken :' , refreshToken);
      console.log('profile :' , profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;

app.listen(PORT);
