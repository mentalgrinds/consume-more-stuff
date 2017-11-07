module.exports = function(sequelize, DataTypes){
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    userstatus:{
      type: DataTypes.STRING
    }
  })

  User.associate = function(models){
    User.hasMany(models.item, {
      foreignKey: 'item_id', as: 'item_id'
    })
  }
  return User;
}

