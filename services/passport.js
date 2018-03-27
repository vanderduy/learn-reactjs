const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const key = require("../config/key");

passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((id,done)=>{
  User.findById(id)
  .then(user=>{
    done(null,user)
  })
})

passport.use(
  new googleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken :' , accessToken);
      // console.log('refreshToken :' , refreshToken);
      //console.log("profile :", profile);
      User.findOne({googleId: profile.id})
      .then(exist =>{
        if(exist){
          //we already have this record
          done(null,exist)
        } else {
          //we don't have this ID
          new User({ googleId: profile.id })
          .save()
          .then(user=> done(null,User))
        }
      })
      
    }
  )
);
