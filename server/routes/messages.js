const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {messages}              = db;


route.get('/',(req,res) => {
  return messages.findAll()
    .then((messages)=>{
      return res.json(messages);
    })
})

route.post('/', (req, res) =>{
    return messages.create({
      content: req.body.content,
      buyerId: req.body.buyerId,
      sellerId: req.body.sellerId,
      itemId: req.body.itemId,
      senderId: req.body.senderId
    }).then((post)=>{
      return res.json(post);
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