const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const items                   = express.Router();
// const db                      = require('../../models');
const ModelName               = 'temp';



items.get('/', ( req, res ) => {
  console.log('items route has been requested: GET ');
  res.json("smoke test - items route");
  ModelName.findAll({raw:true})
  .then((DataCollection) => {
    console.log('items route has queried all data from the DB, result: ', DataCollection);
    //res.json(DataCollection); when DB is setup un-comment in mean time:
  });
});

items.get('/:id', ( req, res ) => {
  console.log('items ID route has been requested: GET ');
  let id = req.params.id;
  console.log('items.get/:id :', id);
  ModelName.findById(id)
  .then((data) => {
    console.log('items ID route has been requested:, result: ', data);
    res.json(data);
  });
});

items.post('/:id', ( req, res ) => {
  console.log('items route has been requested: POST ');
  ModelName.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('items route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

items.put('/:id', ( req, res ) => {
  console.log('items ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('items.put/:id :', id);
  let data = req.body;
  console.log('items.put/:id data :', data);
  return ModelName.findById(id)
  .then(data => {
    return ModelName.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('items ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

items.delete('/:id', ( req, res ) => {
  console.log('items ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('items.delete/:id :', id);
  let data = req.body;
  console.log('items.delete/:id data :', data);
  ModelName.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('items ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = items;