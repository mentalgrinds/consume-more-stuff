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
    deleted:{
      type: DataTypes.DATEONLY,
      defaultValue: null
    }
  })

  Item.associate = function(models){
  Item.belongsTo(models.user, {
    foreignKey: 'seller_id', as: 'user'
  });
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

