const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;


route.post('/', (req, res) =>{
  let id = req.body.id;
  user.findById(id)
  .then((user)=>{
    return user.update({
      qone: req.body.qone,
      qtwo: req.body.qtwo
    }).then((user)=>{
      let local = {}
      local.username = user.username;
      local.id = user.id;
      local.admin = user.admin;
      local.email = user.email;
      return res.json(local);
    })
  })
})














function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;