'use strict';

const { User } = require('../models');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@user.io',
          username: 'Demo-User',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          firstName: 'Test',
          lastName: 'User2',
          email: 'user2@user.io',
          username: 'TestUser2',
          hashedPassword: bcrypt.hashSync('password2'),
        },
        {
          firstName: 'Test',
          lastName: 'User3',
          email: 'user3@user.io',
          username: 'TestUser3',
          hashedPassword: bcrypt.hashSync('password3'),
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      // {
      //   username: { [Op.in]: ["Demo-USer", "TestUser1", "TestUser2"] },
      // },
      // {}
    );
  },
};