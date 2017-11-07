const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const items                   = express.Router();
// const db                      = require('../../models');


app.get('/', ( req, res ) =>{
  res.json('Smoke Test - items');
});


module.exports = items;