'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    Name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    idNote: {
      type: DataTypes.INTEGER,
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