module.exports = function(sequelize, DataTypes){
  const Condition = sequelize.define('condition', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })

  Condition.associate = function(models){
    Condition.belongsTo(models.item, {
      foreignKey: 'condition', as: 'condition'
    })
  }
  return Condition;
}