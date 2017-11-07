'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('itemstatuses',[{
  "title": "published",
  "createdAt": "9/6/2017",
  "updatedAt": "3/13/2017"
}, {
  "title": "sold",
  "createdAt": "8/27/2017",
  "updatedAt": "6/25/2017"
}, {
  "title": "published",
  "createdAt": "7/27/2017",
  "updatedAt": "7/22/2017"
}, {
  "title": "sold",
  "createdAt": "9/5/2017",
  "updatedAt": "11/3/2017"
}, {
  "title": "sold",
  "createdAt": "5/4/2017",
  "updatedAt": "10/14/2017"
}, {
  "title": "sold",
  "createdAt": "2/9/2017",
  "updatedAt": "8/2/2017"
}, {
  "title": "sold",
  "createdAt": "2/7/2017",
  "updatedAt": "11/24/2016"
}, {
  "title": "published",
  "createdAt": "6/28/2017",
  "updatedAt": "9/4/2017"
}, {
  "title": "published",
  "createdAt": "9/30/2017",
  "updatedAt": "5/22/2017"
}, {
  "title": "sold",
  "createdAt": "12/9/2016",
  "updatedAt": "5/31/2017"
}, {
  "title": "published",
  "createdAt": "4/8/2017",
  "updatedAt": "8/25/2017"
}, {
  "title": "published",
  "createdAt": "7/9/2017",
  "updatedAt": "7/17/2017"
}, {
  "title": "published",
  "createdAt": "3/4/2017",
  "updatedAt": "9/29/2017"
}, {
  "title": "sold",
  "createdAt": "5/15/2017",
  "updatedAt": "11/30/2016"
}, {
  "title": "published",
  "createdAt": "11/17/2016",
  "updatedAt": "4/13/2017"
}, {
  "title": "published",
  "createdAt": "7/24/2017",
  "updatedAt": "2/28/2017"
}, {
  "title": "published",
  "createdAt": "8/12/2017",
  "updatedAt": "11/1/2017"
}, {
  "title": "sold",
  "createdAt": "6/30/2017",
  "updatedAt": "11/21/2016"
}, {
  "title": "sold",
  "createdAt": "4/13/2017",
  "updatedAt": "6/12/2017"
}, {
  "title": "sold",
  "createdAt": "2/26/2017",
  "updatedAt": "11/19/2016"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('itemstatuses',null )
  }
};