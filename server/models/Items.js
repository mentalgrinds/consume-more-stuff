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
    condition:{
      type: DataTypes.STRING,
      allowNull: false
    },
    category:{
      type: DataTypes.STRING,
      allowNull: false
    },
    dimensions:{
      type: DataTypes.STRING
    },
    notes:{
      type: DataTypes.STRING
    },
    itemstatus:{
      type: DataTypes.BOOLEAN
    },
    image:{
      type: DataTypes.STRING
    },
    seller:{
      type: DataTypes.STRING
    }
  })

  Item.associate = function(models){
    Item.belongsTo(models.user,{
      foreignKey: 'seller'
    })
  }
  return Item;
}

