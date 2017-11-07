const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {item}                 = db;



route.get('/', ( req, res ) => {
  console.log('items route has been requested: GET ');
  item.findAll({raw:true})
  .then((DataCollection) => {
    console.log('items route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  console.log('items ID route has been requested: GET ');
  let id = req.params.id;
  console.log('items.get/:id :', id);
  item.findById(id)
  .then((data) => {
    console.log('items ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  console.log('items route has been requested: POST ');
  item.create({
    name : req.body.name,
    description : req.body.description,
    price    : req.body.price,
    manufacturer : req.body.manufacturer,
    model : req.body.model,
    dimensions    : req.body.dimensions,
    notes : req.body.notes,
    image    : req.body.image
  }).then((data) => {
    console.log('items route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  console.log('items ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('items.put/:id :', id);
  let data = req.body;
  return item.update({
    name : req.body.name,
    description : req.body.description,
    price    : req.body.price,
    manufacturer : req.body.manufacturer,
    model : req.body.model,
    dimensions    : req.body.dimensions,
    notes : req.body.notes,
    image    : req.body.image
  }, {where: {id:id}
  }).then((user) => {
    res.json('User updated');
  });
});

route.delete('/:id', ( req, res ) => {
  console.log('items ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('items.delete/:id :', id);
  let data = req.body;
  console.log('items.delete/:id data :', data);
  item.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('items ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = route;