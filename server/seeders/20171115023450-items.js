'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',[{
      "name": "Fancy computer",
      "description": "fanciest computer i've ever seen",
      "price": "$1000",
      "manufacturer": "APPLE",
      "model": "",
      "dimensions": "",
      "notes": "Mazagran carajillo iced filter aged, single origin decaffeinated grinder cultivar cream irish ristretto. French press foam organic viennese at, grounds, redeye percolator froth french press turkish. Body, aroma shop aroma, crema fair trade café au lait, percolator barista black decaffeinated ristretto.",
      "image": "https://i.pinimg.com/736x/2f/71/af/2f71af2293de7496cea061eae984db6d--the-personal-the-s.jpg",
      "categoryId": 1,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Half broken toaster",
      "description": "it fires up, but not hot enough to actually toast",
      "price": "trade you for a fully functioning toaster",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Ut strong, cup sweet chicory, pumpkin spice wings café au lait cup eu crema. Beans filter robust single origin to go caramelization breve galão est single origin medium viennese. Breve, caffeine, ristretto white at viennese bar siphon. Cream froth con panna, decaffeinated aftertaste aroma con panna rich cultivar.",
      "image": "https://i.ytimg.com/vi/1PVkyBSAjas/maxresdefault.jpg",
      "categoryId": 3,
      "conditionId": 3,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Damp sofa",
      "description": "Beige, seats 2~7 people",
      "price": "$500",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Half and half mug at, extra carajillo chicory milk rich. Caffeine, at iced, frappuccino, so rich java viennese to go mazagran.",
      "image": "http://www.advancejunkremoval.com/wp-content/uploads/2011/12/old-couch-removal.jpg",
      "categoryId": 2,
      "conditionId": 2,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Red car",
      "description": "It's a red car",
      "price": "5 bags of gummy worms",
      "manufacturer": "Idk",
      "model": "Toyota?",
      "dimensions": "",
      "notes": "A saucer froth to go kopi-luwak seasonal dark carajillo. Aged, coffee cup whipped ut extraction macchiato. Skinny cream, robust carajillo plunger pot, et so macchiato eu variety. Roast flavour, con panna cortado roast whipped half and half.",
      "image": "http://bpc.h-cdn.co/assets/16/30/980x490/saleen-red-car.jpg",
      "categoryId": 4,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "MacBook Air",
      "description": "an unused silver MacBook Air",
      "price": "$100",
      "manufacturer": "Apple",
      "model": "MacBook Air, 2014",
      "dimensions": "",
      "notes": "Mazagran carajillo iced filter aged, single origin decaffeinated grinder cultivar cream irish ristretto. French press foam organic viennese at, grounds, redeye percolator froth french press turkish. Body, aroma shop aroma, crema fair trade café au lait, percolator barista black decaffeinated ristretto.",
      "image": "https://cnet2.cbsistatic.com/img/ie7ntKCIsW9_p8CaecRoRbzu0bs=/770x433/2015/05/06/1503bb41-3bf4-412a-8e7a-a94c084b140d/apple-macbook-air-2015-02.jpg",
      "categoryId": 1,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Microwave",
      "description": "Brand new, never been used, great microwave",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Ut strong, cup sweet chicory, pumpkin spice wings café au lait cup eu crema. Beans filter robust single origin to go caramelization breve galão est single origin medium viennese. Breve, caffeine, ristretto white at viennese bar siphon. Cream froth con panna, decaffeinated aftertaste aroma con panna rich cultivar.",
      "image": "http://payload.cargocollective.com/1/0/19550/1916333/ooo%20normal.jpg",
      "categoryId": 3,
      "conditionId": 3,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Antique cabinet",
      "description": "My grandmother gave it to me. Made of wood",
      "price": "negotiable",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Half and half mug at, extra carajillo chicory milk rich. Caffeine, at iced, frappuccino, so rich java viennese to go mazagran.",
      "image": "https://a.1stdibscdn.com/archivesE/upload/1121211/f_3564302/3564302_z.jpg",
      "categoryId": 2,
      "conditionId": 2,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Purple car",
      "description": "It's a purple car",
      "price": "$29",
      "manufacturer": "Ford",
      "model": "",
      "dimensions": "",
      "notes": "A saucer froth to go kopi-luwak seasonal dark carajillo. Aged, coffee cup whipped ut extraction macchiato. Skinny cream, robust carajillo plunger pot, et so macchiato eu variety. Roast flavour, con panna cortado roast whipped half and half.",
      "image": "http://www.classiccarsseller.com/media/uploads/cars/2014/8/2/1930-ford-model-a-house-of-kolors-purple-rainblack/0.jpg",
      "categoryId": 4,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    },
    {
      "name": "Printing press",
      "description": "brand new printing press",
      "price": "$9999",
      "manufacturer": "Not sure, Apple?",
      "model": "",
      "dimensions": "",
      "notes": "Mazagran carajillo iced filter aged, single origin decaffeinated grinder cultivar cream irish ristretto. French press foam organic viennese at, grounds, redeye percolator froth french press turkish. Body, aroma shop aroma, crema fair trade café au lait, percolator barista black decaffeinated ristretto.",
      "image": "https://futurestartup.com/wp-content/uploads/2013/01/printing-press.jpg",
      "categoryId": 1,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Vacuum cleaner",
      "description": "has a face on it!",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Ut strong, cup sweet chicory, pumpkin spice wings café au lait cup eu crema. Beans filter robust single origin to go caramelization breve galão est single origin medium viennese. Breve, caffeine, ristretto white at viennese bar siphon. Cream froth con panna, decaffeinated aftertaste aroma con panna rich cultivar.",
      "image": "https://brain-images-ssl.cdn.dixons.com/4/6/10027664/u_10027664.jpg",
      "categoryId": 3,
      "conditionId": 3,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Tree-shaped picnic table",
      "description": "Just a normal picnic table shaped like a tree",
      "price": "negotiable",
      "manufacturer": "",
      "model": "",
      "dimensions": "",
      "notes": "Half and half mug at, extra carajillo chicory milk rich. Caffeine, at iced, frappuccino, so rich java viennese to go mazagran.",
      "image": "https://www.permies.com/t/40855/a/27725/picnic-table.jpg",
      "categoryId": 2,
      "conditionId": 2,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }, {
      "name": "Crane",
      "description": "yellow, super useful",
      "price": "$254",
      "manufacturer": "CAT",
      "model": "",
      "dimensions": "",
      "notes": "A saucer froth to go kopi-luwak seasonal dark carajillo. Aged, coffee cup whipped ut extraction macchiato. Skinny cream, robust carajillo plunger pot, et so macchiato eu variety. Roast flavour, con panna cortado roast whipped half and half.",
      "image": "https://www.cranerental.com/wp-content/uploads/2013/11/home-contact-us.jpg",
      "categoryId": 4,
      "conditionId": 1,
      "itemstatusId": 2,
      "userId": 1,
      "createdAt": "6/23/2017",
      "updatedAt": "1/8/2017"
    }] , {});
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
