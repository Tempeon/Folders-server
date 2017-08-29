'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Folders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idParent: {
        type: Sequelize.INTEGER,
      }
    }),
  down: (queryInterface, Sequelize) =>
     queryInterface.dropTable('Folders'),

};