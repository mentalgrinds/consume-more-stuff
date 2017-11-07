module.exports = function(sequelize, DataTypes){
  const Category = sequelize.define('category', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })

  Category.associate = function(models){
    Category.belongsTo(models.item, {
      foreignKey: 'category', as: 'category'
    })
  }
  return Category;
}