'use strict';
module.exports = (sequelize, DataTypes) => {
  const Folders = sequelize.define('Folders', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idParent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Folders.hasMany(models.Notes, {
          foreignKey: 'idFolder',
          as: 'notes',
        });
        Folders.hasMany(models.Folders, {
          foreignKey: 'idParent',
          as: 'folders',
          onDelete: 'CASCADE',
        })
      },
    },
  });
  return Folders;
};