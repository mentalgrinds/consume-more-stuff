module.exports = function(sequelize, DataTypes){
  const Category = sequelize.define('category', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })

  Category.associate = function(models){
    Category.hasMany(models.item, {
      foreignKey: 'category_id', as: 'category'
    })
  }
  return Category;
}