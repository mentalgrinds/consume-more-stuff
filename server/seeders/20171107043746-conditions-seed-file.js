'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('conditions',[{
  "title": "new",
  "createdAt": "12/4/2016",
  "updatedAt": "1/31/2017"
}, {
  "title": "good",
  "createdAt": "10/17/2017",
  "updatedAt": "8/29/2017"
}, {
  "title": "ok",
  "createdAt": "8/24/2017",
  "updatedAt": "6/27/2017"
}, {
  "title": "used",
  "createdAt": "8/9/2017",
  "updatedAt": "10/21/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('conditions',null )
  }
};

