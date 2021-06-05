const sequelizeCon = require('../database/config');
const { Sequelize } = require('sequelize');

const Product = sequelizeCon.define('products', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(3000),
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING
    }
});

module.exports = Product;