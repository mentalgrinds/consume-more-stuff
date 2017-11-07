const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {users,items,conditions,categories,itemStatus,userStatus} = db;
const Redis           = require('connect-redis')(session);
const LocalStrategy   = require('passport-local').Strategy;
const saltRounds      = 12;
const PORT            = process.env.PORT || 3000;
const app             = express();

app.use(bodyParser.json());
//Authentication:
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use('/api', routes);


app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: true } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite: 
  console.log(`Server connected on PORT: ${PORT}`);
});