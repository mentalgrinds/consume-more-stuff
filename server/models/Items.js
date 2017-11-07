module.exports = function(sequelize, DataTypes){
  const Item = sequelize.define('item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
     type: DataTypes.STRING,
     allowNull: false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    manufacturer:{
      type: DataTypes.STRING
    },
    model:{
      type: DataTypes.STRING
    },
    dimensions:{
      type: DataTypes.STRING
    },
    notes:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
    seller:{
      type: DataTypes.STRING
    }
  })

  Item.associate = function(models){
  Item.belongsTo(models.user);
  Item.belongsTo(models.category, {
    foreignKey: 'category_id', as: 'category'
  });
  Item.belongsTo(models.condition, {
    foreignKey: 'condition_id', as: 'condition'
    });
  Item.belongsTo(models.itemstatus, {
    foreignKey: 'itemstatus_id', as: 'itemstatus'
    });
  }
  return Item;
}

