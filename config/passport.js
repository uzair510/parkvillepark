// this handles the authentication process
const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/signupModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    // Local strategy
// The fields used here should correspond to the way they are written in the schema(model)
    passport.use(new LocalStrategy(function(username, password, done){
 // match username
      let query = { username:username };
// We pass an error or the name of our model (to cater for both possibilities)
      Signup.findOne(query, function(err, signupModel){
        if(err) throw err;
  
        if(!signupModel) {
          return done(null, false, { message: 'No username found' });
        }

// Match password
bcrypt.compare(password, signupModel.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, signupModel);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
}));

passport.serializeUser(function(signupModel, done) {
    done(null, signupModel.id);
});

  passport.deserializeUser(function(id, done) {
    Signup.findById(id, function(err, signupModel) {
      done(err, signupModel);
    });
  });
};
