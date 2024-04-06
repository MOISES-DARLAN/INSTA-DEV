'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    avatar: {
        type: Sequelize.STRING
    },
    bio: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    },
    password_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false
    },
    updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};