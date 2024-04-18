const sequelize = require('../db');
const { DataTypes, DATE } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    rating: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: true },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Recipe = sequelize.define('recipe', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    ingredients: { type: DataTypes.TEXT, allowNull: false },
    calories: { type: DataTypes.INTEGER, allowNull: false },
    process: { type: DataTypes.TEXT, allowNull: false },
    image:{ type: DataTypes.STRING, allowNull: false }
});                    

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT, allowNull: false }
});

const Report = sequelize.define('report', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    reason: { type: DataTypes.TEXT, allowNull: false }
});

User.hasMany(Recipe);
Recipe.belongsTo(User);

User.hasMany(Report);
Report.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Recipe.hasMany(Comment);
Comment.belongsTo(Recipe);

Category.hasMany(Recipe);
Recipe.belongsTo(Category);

Comment.hasMany(Report);
Report.belongsTo(Comment);


module.exports = {
    User,
    Recipe,
    Comment,
    Category,
    Report
};