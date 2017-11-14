const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;


  route.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      console.log('for you',req.body);
      let qone = req.body.qone
      let qtwo = req.body.qtwo
      let id = user.id;

      user.update({
        qone: qone,
        qtwo: qtwo
      }, {where: {id: id}})
      .then(()=>{
        console.log('success');
      })



    res.json(user);

  })(req, res, next);
});














function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;