module.exports = function(sequelize, DataTypes){
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    userstatus:{
      type: DataTypes.STRING
    },
     admin:{
      type: DataTypes.BOOLEAN
    },
    qone:{
      type: DataTypes.STRING
    },
    qtwo:{
      type: DataTypes.STRING
    },
    messageId:{
      type: DataTypes.INTEGER
    }
  })

  User.associate = function(models){
    User.hasMany(models.item, {
      foreignKey: 'userId', as: 'items4sale'
    })
  }
  return User;
}

