'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    Name: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Tags.belongsTo(models.Notes, {
          foreignKey: 'idNote',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Tags;
};