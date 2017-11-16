const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('users route has been requested: GET ');
  user.findAll({raw:true})
  .then((DataCollection) => {
    //console.log('users route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users ID route has been requested: GET ');
  let id = req.params.id;
  console.log('users.get/:id :', id);
  user.findById(id)
  .then((data) => {
    // console.log('users ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();

  let id = req.params.id;

  let newInfo = req.body;


  return user.findById(id)
  .then((user) => {
    return user.update(newInfo,{
      returning: true,
      plain: true
    })
    .then((user)=>{
            console.log('52',user);
      return res.json(user);
    })
  })
})

  route.put('/:id/password', function(req, res, next) {
    console.log(req.body);
    passport.authenticate('local', function(err, user, info) {
      let id = user.id;
      bcrypt.genSalt(saltRounds, function(err,salt){
        bcrypt.hash(req.body.matchedPassword, salt, function(err, hash){
          db.user.update({
            password: hash
          }, {where: {id: id}}).then(()=>{
                //console.log('password update fired')
          })
          res.json(user ? user.id : user);
        });
      });
  })(req, res, next);
});

  route.put('/:id/password/reset', function(req, res, next) {
    console.log(req.body);
      let id = req.body.id;
      bcrypt.genSalt(saltRounds, function(err,salt){
        bcrypt.hash(req.body.matchedPassword, salt, function(err, hash){
          db.user.update({
            password: hash
          }, {where: {id: id}}).then(()=>{
                //console.log('password update fired')
          })
          let local = {};
          local.change = true;
          res.json(local);
        });
      });
});










route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('users.update/:id :', id);
  let data = req.body;
  //console.log('users.update/:id data :', data);
  return user.update({
    userstatus: 'inactive'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
    res.json(user);

  })
});


function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;