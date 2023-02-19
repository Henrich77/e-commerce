// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

User.hasMany(Plan, {
  foreignKey: 'user_id'
});

Plan.belongsTo(User, {
  foreignKey: 'user_id'
});

Plan.hasMany(Workout, {
  foreignKey: 'plan_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(Plan, {
  foreignKey: 'plan_id'
});
