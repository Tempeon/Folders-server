'use strict';
module.exports = (sequelize, DataTypes) => {
  const Folders = sequelize.define('Folders', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IdParentFolder: {
      type: DataTypes.NUMBER,
      defaultValue: null,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Folders.hasMany(models.Notes, {
          foreignKey: 'idFolder',
          as: 'notes',
        });
      },
    },
  });
  return Folders;
};