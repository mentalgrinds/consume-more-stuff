const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const itemStatus              = express.Router();
// const db                      = require('../../models');
const ModelName               = 'temp';



itemStatus.get('/', ( req, res ) => {
  console.log('itemStatus route has been requested: GET ');
  res.json("smoke test - itemStatus route");
  ModelName.findAll({raw:true})
  .then((DataCollection) => {
    console.log('itemStatus route has queried all data from the DB, result: ', DataCollection);
    //res.json(DataCollection); when DB is setup un-comment in mean time:
  });
});

itemStatus.get('/:id', ( req, res ) => {
  console.log('itemStatus ID route has been requested: GET ');
  let id = req.params.id;
  console.log('itemStatus.get/:id :', id);
  ModelName.findById(id)
  .then((data) => {
    console.log('itemStatus ID route has been requested:, result: ', data);
    res.json(data);
  });
});

itemStatus.post('/:id', ( req, res ) => {
  console.log('itemStatus route has been requested: POST ');
  ModelName.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    console.log('itemStatus route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

itemStatus.put('/:id', ( req, res ) => {
  console.log('itemStatus ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('itemStatus.put/:id :', id);
  let data = req.body;
  console.log('itemStatus.put/:id data :', data);
  return ModelName.findById(id)
  .then(data => {
    return ModelName.update(data, {
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then(data => {
      console.log('itemStatus ID route has been updated:, result: ', data);
      return res.json(data);
    })
  })
});

itemStatus.delete('/:id', ( req, res ) => {
  console.log('itemStatus ID route has been requested: DELETE ');
  let id = req.params.id;
  console.log('itemStatus.delete/:id :', id);
  let data = req.body;
  console.log('itemStatus.delete/:id data :', data);
  ModelName.destroy({
      where     : [{id: id}],
      returning : true,
      plain     : true
    }).then((data) => {
      console.log('itemStatus ID route has been updated:, result: ', data);
      return res.json(data);
  })
});


module.exports = itemStatus;