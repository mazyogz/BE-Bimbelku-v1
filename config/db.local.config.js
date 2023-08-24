const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bimbel_new', 'postgres', 'ariyogi', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;