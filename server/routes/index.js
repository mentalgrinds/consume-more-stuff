//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const items       = require('./items.js');
const categories  = require('./categories.js');
const conditions  = require('./conditions.js');

route.use('/users', users);
route.use('/items', items);
route.use('/categories', categories);
route.use('/conditions', conditions);

module.exports = route;