'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories',[{
  "title": "vehicles",
  "createdAt": "2/20/2017",
  "updatedAt": "10/21/2017"
}, {
  "title": "appliances",
  "createdAt": "9/19/2017",
  "updatedAt": "12/27/2016"
}, {
  "title": "furniture",
  "createdAt": "8/22/2017",
  "updatedAt": "8/4/2017"
}, {
  "title": "computers",
  "createdAt": "1/8/2017",
  "updatedAt": "7/19/2017"
}] )
  }
},

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('categories',null )
  }
};