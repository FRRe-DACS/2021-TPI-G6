'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    
    static associate(models) {
      Notification.hasMany(models.Alert, {
        foreignKey: 'alert_id'
      });
    }
  };
  Notification.init({
    status: DataTypes.BOOLEAN,
    cuit: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};