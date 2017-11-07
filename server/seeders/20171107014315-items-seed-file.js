'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',[{
  "name": "M",
  "description": "Canis lupus baileyi",
  "price": "6.33",
  "manufacturer": "Carbidopa, Levodopa and Entacapone",
  "model": "Avenger",
  "dimensions": "M",
  "notes": "Compensation Analyst",
  "image": "https://robohash.org/assumendatotamsunt.jpg?size=100x100&set=set1",
  "deleted": "1/7/2018",
  "createdAt": "9/30/2017",
  "updatedAt": "3/9/2017",
  "categoryId": 3,
  "conditionId": 1,
  "itemstatusId": 1,
  "userId": 1
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('items',null )
  }
};