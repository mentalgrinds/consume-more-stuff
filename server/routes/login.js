const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;

route.get('/',(req,res)=>{
  let value = req.isAuthenticated();
  return res.json(req.user);
});

route.post('/', function(req, res, next) {
  let local = {}
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }//send fail message - logged in false //some error reason
   if (!user) {
      return
        local.id = 'undefined';
        local.username = 'undefined';
        local.auth = false;
        return res.json(local);  }
    req.logIn(user, function(err) {
      if (err) {
        local.id = 'undefined';
        local.username = 'undefined';
        local.auth = false;
        return res.json(local);
      }

      local.id = req.user.id;
      local.username = req.user.username;
      local.auth = true;
      local.admin = req.user.admin;
      return res.json(local);
    });
  })(req, res, next);
});



module.exports = route;