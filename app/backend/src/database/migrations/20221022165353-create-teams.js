'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      teamName: {
        field: 'team_name',
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, { tableName: 'teams', timestamps: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams')
  }
};
