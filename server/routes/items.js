const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {item}                 = db;

const moveImage = require('../lib/moveImage');
const moveImageToExistingFolder = require('../lib/moveImageToExistingFolder');

const path = require('path');
const fs = require('fs');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'public', 'uploads', 'items'),
  filename(req, file, cb){
    cb(null, `${file.originalname.split(' ').join('')}`);
  }
})
const upload = multer({ storage });


const User = db.user;
const Category = db.category;
const Condition = db.condition;
const ItemStatus = db.itemstatus;

route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  item.findAll({
    where: {
      deletedAt: null
    },
    include:[
      { model: User, as: 'seller' },
      { model: Category, as: 'itemcategory'},
      { model: Condition, as: 'itemcondition'},
      { model: ItemStatus, as: 'itemstatus'}
    ]
  })
  .then((DataCollection) => {
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  item.findById(id)
  .then((data) => {
    console.log('items ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/', upload.single('file'), ( req, res ) => {
  let value = req.isAuthenticated();

  item.create({
    name : req.body.name,
    description : req.body.description,
    price    : req.body.price,
    manufacturer : req.body.manufacturer,
    model : req.body.model,
    dimensions    : req.body.dimensions,
    notes : req.body.notes,
    categoryId : req.body.category,
    conditionId : req.body.condition,
    userId : req.user.id,
    itemstatusId: 2
  }).then((data) => {
    const idString = data.id.toString();
    return moveImage(idString, req.file.originalname, req.file.path)
    .then((imgPath) => {
      return data.update({
        image: imgPath.slice(((req.file.path).indexOf('/uploads/')))
      },{
        returning: true,
        plain: true
      })
      .then(updatedItem => {
        return item.findOne({
          where: {
            id: updatedItem.id
          },
          include: [
            { model: User, as: 'seller' },
            { model: Category, as: 'itemcategory'},
            { model: Condition, as: 'itemcondition'},
            { model: ItemStatus, as: 'itemstatus'}
          ]
        })
        .then((foundItem) => {
          console.log(foundItem);
          res.json(foundItem);
        })
        .catch(err => {
          throw err;
        });
      });

    })
  })
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();

  let id = req.params.id;

  let newInfo = req.body;

  return item.findById(id)
  .then(foundItem => {
    if(parseInt(foundItem.userId) === parseInt(req.user.id)){
      return foundItem.update(newInfo, {
        returning: true,
        plain: true
      })
      .then(foundItem => {
        return item.findOne({
          where: {
            id: id
          },
          include: [
            { model: User, as: 'seller' },
            { model: Category, as: 'itemcategory'},
            { model: Condition, as: 'itemcondition'},
            { model: ItemStatus, as: 'itemstatus'}
          ]
        })
        .then((editedItem) => {
          return res.json(editedItem);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }else{
      return res.send('error!');
    }
  })
});


route.put('/images/:id', upload.single('file'), (req, res) => {
  let value = req.isAuthenticated();

  moveImageToExistingFolder(req.body.id.toString(), req.file.originalname, req.file.path)
  .then((filePath) => {
    let newFilePath = filePath.slice(((req.file.path).indexOf('/uploads/')));
    item.update({ image: newFilePath}, {where : [{id: parseInt(req.body.id)}],
      returning:true,
      plain: true
    })
    .then((data) => {
      return item.findOne({
        where: {
          id: parseInt(req.body.id)
        },
        include: [
        { model: User, as: 'seller' },
        { model: Category, as: 'itemcategory'},
        { model: Condition, as: 'itemcondition'},
        { model: ItemStatus, as: 'itemstatus'}
        ]
      })
      .then((editedItem) => {
        return res.json(editedItem);
      })
    })
  })
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();

  let id = req.params.id;

  let timestamp = Math.floor(Date.now()/1000);

  return item.findById(id)
  .then(item => {
    return item.update({deletedAt : timestamp}, {
      where: [{id: id}],
      returning: true,
      plain: true
    })
    .then(item => {
      return res.json(item);
    })
  })
  .catch((err) => {
    console.log(err);
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