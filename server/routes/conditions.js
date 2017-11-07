const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const conditions              = express.Router();
// const db                      = require('../../models');
const ModelName               = 'temp';



conditions.get('/', ( req, res ) => {
  console.log('conditions route has been requested: GET ');
  res.json("smoke test - conditions route");
  ModelName.findAll({raw:true})
  .then((DataCollection) => {
    console.log('conditions route has queried all data from the DB, result: ', DataCollection);
    //res.json(DataCollection); when DB is setup un-comment in mean time:
  });
});

conditions.get('/:id', ( req, res ) => {
  console.log('conditions ID route has been requested: GET ');
  let id = req.params.id;
  console.log('conditions.get/:id :', id);
  ModelName.findById(id)
  .then((data) => {
    console.log('conditions ID route has been requested:, result: ', data);
    res.json(data);
  });
});

conditions.post('/:id', ( req, res ) => {
  console.log('conditions route has been requested: POST ');
  ModelName.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('conditions route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

conditions.put('/:id', ( req, res ) => {
  console.log('conditions ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('conditions.put/:id :', id);
  let data = req.body;
  console.log('conditions.put/:id data :', data);
  return ModelName.findById(id)
  .then(data => {
    return ModelName.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('conditions ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

conditions.delete('/:id', ( req, res ) => {
  console.log('conditions ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('conditions.delete/:id :', id);
  let data = req.body;
  console.log('conditions.delete/:id data :', data);
  ModelName.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('conditions ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = conditions;