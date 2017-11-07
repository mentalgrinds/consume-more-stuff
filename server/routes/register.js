const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;

//REGISTER ROUTE
route.get('/',(req,res)=>{
  res.json('registeration page');
});

route.post('/', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err,salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.user.create({
        username: req.body.username,
        password: hash
        // link: req.body.link,
        // description: req.body.description
      })
      .then( (user) => {
        console.log(user);
        res.redirect('/users/login');
      })
      .catch((err) => {
        return res.send('Username has been taken'); 
      });
    });
  });
});

module.exports = route;
