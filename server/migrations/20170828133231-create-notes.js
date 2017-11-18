'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: 'false',
      },
      Content: {
        type: Sequelize.STRING,
        defaultValue: 'null',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      idFolder: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Folders',
          key: 'id',
          as: 'idFolder'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Notes'),

};