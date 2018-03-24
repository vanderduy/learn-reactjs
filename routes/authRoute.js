const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

const key = require("../config/key");

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