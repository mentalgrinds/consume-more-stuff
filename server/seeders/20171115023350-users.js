'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[{
      "username": "ilovelima",
      "password": "Password1",
      "email": "chemtrails@netscape.org",
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
