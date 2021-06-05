const Sequelize = require('sequelize');

//Create database connection
const sequelizeCon = new Sequelize(`mysql://root:@localhost:3306/test`,{
    dialect: 'mysql',
    protocol: 'mysql',
});

module.exports = sequelizeCon;