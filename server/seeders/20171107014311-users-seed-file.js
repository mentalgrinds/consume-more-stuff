'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[{
  "username": "asodory0",
  "password": "wFnC1Pl",
  "email": "sbroxup0@apple.com",
  "userstatus": "inactive",
  "createdAt": "1/5/2017",
  "updatedAt": "2/7/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users',null )
  }
};
