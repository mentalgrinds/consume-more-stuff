const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {messages}              = db;
const {user}                  = db;
const {item}                  = db;

route.get('/',(req,res) => {
  return messages.findAll({
    include:[
    { model: user, as: 'seller' },
    { model: user, as: 'buyer' },
    { model: item, as: 'item' }
    ]
  })
    .then((messages)=>{
      return res.json(messages);
    })
})

route.post('/', (req, res) =>{
  console.log(req.body);
    let id = req.body.senderId
    let local ={}
    user.findById(id)
    .then((user)=>{
      local.id = user.id;
      local.username = user.username;
      return messages.create({
      content: req.body.content,
      buyerId: local.id,
      sellerId: req.body.sellerId,
      itemId: req.body.itemId,
      senderId: req.body.senderId,
      senderusername: req.body.senderName
    }).then((post)=>{
      post.username = local.username;
      return res.json(post);
    })
  })
    
})



route.get('/item/:id',(req,res) => {
  let itemId = req.params.id;
  return messages.findAll({where: {itemId: itemId}})
    .then((message)=>{
      return res.json(message);
    })
})














function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;