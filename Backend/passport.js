const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = process.env.clientID;
const GOOGLE_CLIENT_SECRET = process.env.clientSecret;

passport.use(
    new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    console.log("google login : " ,accessToken, refreshToken, profile);
    done(null,profile );
  }
 )
);

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});