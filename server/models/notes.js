'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idFolder: {
      type: DataTypes.INTEGER,
      alloNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Notes.belongsTo(models.Folders, {
          foreignKey: 'idFolder',
          onDelete: 'CASCADE',
        });
        Notes.hasMany(models.Tags, {
          foreignKey: 'idNote',
          as: 'tags'
        })
      }
    }
  });
  return Notes;
};