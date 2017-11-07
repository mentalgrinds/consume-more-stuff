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
    ItemStatus.hasMany(models.item, {
      foreignKey: 'itemstatus_id', as: 'itemstatus'
    })
  }
  return ItemStatus;
}