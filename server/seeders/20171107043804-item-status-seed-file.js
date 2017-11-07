'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('itemstatuses',[{
  "sold": "false",
  "createdAt": "2/20/2017",
  "updatedAt": "10/21/2017"
}, {
  "published": "false",
  "createdAt": "9/19/2017",
  "updatedAt": "12/27/2016"
}] )
  }
},

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('itemstatuses',null )
  }
};