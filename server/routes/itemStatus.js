const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {itemstatus}            = db;



route.get('/', ( req, res ) => {
  console.log('itemstatus route has been requested: GET ');
  itemstatus.findAll({raw:true})
  .then((DataCollection) => {
    console.log('itemstatus route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  console.log('itemstatus ID route has been requested: GET ');
  let id = req.params.id;
  console.log('itemstatus.get/:id :', id);
  itemstatus.findById(id)
  .then((data) => {
    console.log('itemstatus ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  console.log('itemstatus route has been requested: POST ');
  itemstatus.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('itemstatus route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  console.log('itemstatus ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('itemstatus.put/:id :', id);
  let data = req.body;
  return itemstatus.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }, {where: {id:id}
  }).then((user) => {
    res.json('User updated');
  });
});

route.delete('/:id', ( req, res ) => {
  console.log('itemstatus ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('itemstatus.delete/:id :', id);
  let data = req.body;
  console.log('itemstatus.delete/:id data :', data);
  itemstatus.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('itemstatus ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = route;