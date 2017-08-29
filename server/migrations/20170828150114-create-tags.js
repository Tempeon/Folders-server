'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: 'false'
      },
      idNote: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Notes',
          key: 'id',
          as: 'idNote'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) =>
     queryInterface.dropTable('Tags'),

};