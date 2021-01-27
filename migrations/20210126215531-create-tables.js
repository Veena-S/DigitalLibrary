const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        author: {
          type: Sequelize.STRING,
        },
        author_image: {
          type: Sequelize.STRING,
        },
        genre: {
          type: Sequelize.STRING,
        },
        publisher: {
          type: Sequelize.STRING,
        },
        language: {
          type: Sequelize.STRING,
        },
        isbn: {
          type: Sequelize.STRING,
        },
        summary: {
          type: Sequelize.STRING,
        },
        content_location: {
          type: Sequelize.STRING,
        },
        cover_page: {
          type: Sequelize.STRING,
        },
        published_date: {
          type: Sequelize.DATE,
        },
        total_copies: {
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

    await queryInterface.createTable('users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.BOOLEAN,
        },
        photo: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });

    await queryInterface.createTable('user_book_loans',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        book_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'books',
            key: 'id',
          },
        },
        borrowed_date: {
          type: Sequelize.DATE,
        },
        borrowed_count: {
          type: Sequelize.DATE,
        },
        expected_return_date: {
          type: Sequelize.DATE,
        },
        returned_date: {
          type: Sequelize.DATE,
        },
        image: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_book_loans');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('books');
  },
};