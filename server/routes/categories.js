const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const categories              = express.Router();
// const db                      = require('../../models');
const ModelName               = 'temp';



categories.get('/', ( req, res ) => {
  console.log('categories route has been requested: GET ');
  res.json("smoke test - categories route");
  ModelName.findAll({raw:true})
  .then((DataCollection) => {
    console.log('categories route has queried all data from the DB, result: ', DataCollection);
    //res.json(DataCollection); when DB is setup un-comment in mean time:
  });
});

categories.get('/:id', ( req, res ) => {
  console.log('categories ID route has been requested: GET ');
  let id = req.params.id;
  console.log('categories.get/:id :', id);
  ModelName.findById(id)
  .then((data) => {
    console.log('categories ID route has been requested:, result: ', data);
    res.json(data);
  });
});

categories.post('/:id', ( req, res ) => {
  console.log('categories route has been requested: POST ');
  ModelName.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('categories route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

categories.put('/:id', ( req, res ) => {
  console.log('categories ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('categories.put/:id :', id);
  let data = req.body;
  console.log('categories.put/:id data :', data);
  return ModelName.findById(id)
  .then(data => {
    return ModelName.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('categories ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

categories.delete('/:id', ( req, res ) => {
  console.log('categories ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('categories.delete/:id :', id);
  let data = req.body;
  console.log('categories.delete/:id data :', data);
  ModelName.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('categories ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = categories;