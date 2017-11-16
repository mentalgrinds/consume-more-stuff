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
  let value = req.isAuthenticated();

  itemstatus.findAll({raw:true})
  .then((DataCollection) => {
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;

  itemstatus.findById(id)
  .then((data) => {
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  itemstatus.create({
    sold : req.body.sold,
    published : req.body.published
  }).then((data) => {
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let data = req.body;
  return itemstatus.update({
    sold : req.body.sold,
    published : req.body.published
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((status) => {
    res.json(status);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let data = req.body;

  return itemstatus.update({
    itemstatus: 'deprecated'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((itemstatus) => {
    res.json(itemstatus);

  })
});

function isAuthenticated(req, res, next){

  let id = parseInt(req.params.id);
  let userId = parseInt(req.user.id);

  if(id === req.user.id){
    req.isAuthenticated();
    next();
  }
  else{
    res.redirect('/');
    console.log('denied');}
}


module.exports = route;