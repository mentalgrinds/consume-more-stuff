module.exports = function(sequelize, DataTypes){
  const ItemStatus = sequelize.define('itemstatus', {
    sold: {
      type: DataTypes.BOOLEAN
    },
    published:{
      type: DataTypes.BOOLEAN
    }
  })

  ItemStatus.associate = function(models){
    ItemStatus.belongsTo(models.item, {
      foreignKey: 'itemstatus', as: 'itemstatus'
    })
  }
  return ItemStatus;
}