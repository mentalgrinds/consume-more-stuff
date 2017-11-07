const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                 = db;



route.get('/', ( req, res ) => {
  console.log('users route has been requested: GET ');
  user.findAll({raw:true})
  .then((DataCollection) => {
    console.log('users route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  console.log('users ID route has been requested: GET ');
  let id = req.params.id;
  console.log('users.get/:id :', id);
  user.findById(id)
  .then((data) => {
    console.log('users ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  console.log('users route has been requested: POST ');
  user.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('users route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  console.log('users ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('users.put/:id :', id);
  let data = req.body;
  console.log('users.put/:id data :', data);
  return User.findById(id)
  .then(data => {
    return User.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('users ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

route.delete('/:id', ( req, res ) => {
  console.log('users ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('users.delete/:id :', id);
  let data = req.body;
  console.log('users.delete/:id data :', data);
  User.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('users ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = route;