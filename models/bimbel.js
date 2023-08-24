'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config'); // connect to database railway
// const sequelize = require('../config/db.local.config'); // connect to database local

module.exports = () => {
  class bimbel extends Model {
    static associate(models) {
    }
  }
  bimbel.init({
    nama: DataTypes.STRING,
    url_location: DataTypes.STRING,
    phone: DataTypes.STRING,
    jam_buka: DataTypes.STRING,
    hari_buka: DataTypes.STRING,
    url_pic: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    website: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bimbel',
  });
  return bimbel;
};