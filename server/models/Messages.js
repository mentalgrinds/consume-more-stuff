module.exports = function(sequelize, DataTypes){
  const Message = sequelize.define('messages', {
      content: {
        type: DataTypes.STRING,
        allowNull:false
      },
      buyerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
    Message.associate = function(models){
       Message.belongsTo(models.user,{
        through: {
          model: models.messages
        },
        foreignKey: 'buyerId', as: 'buyer'
        })
       Message.belongsTo(models.user, {
        foreignKey: 'sellerId', as: 'seller'
        }),
       Message.belongsTo(models.item, {
        foreignKey: 'itemId', as: 'item'
        })
     }
     return Message;
   }


// //
//   Message.associate = function(models){
//     Post.belongsTo(models.messages, {
//       foreignKey: 'messageId', as: 'message'
//     }),
//     Post.belongsTo(models.user, {
//       foreignKey: 'sellerId', as: 'seller'
//     }),
//     Post.belongsTo(models.item,{
//       through: {
//         model: models.messages
//       },
//       foreignKey: 'itemId', as: 'item'
//     }),
//     Post.belongsTo(models.user,{
//       through: {
//         model: models.messages
//       },
//       foreignKey: 'buyerId', as: 'buyer'
//     })