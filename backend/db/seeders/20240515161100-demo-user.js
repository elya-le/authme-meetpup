'use strict';

const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,  
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@user.io',
          username: 'Demo-User',
          hashedPassword: bcrypt.hashSync('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: 'Demo',
          lastName: 'User2',
          email: 'demo2@user.io',
          username: 'Demo-User2',
          hashedPassword: bcrypt.hashSync('password2'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstName: 'Demo',
          lastName: 'User3',
          email: 'demo3@user.io',
          username: 'Demo-User3',
          hashedPassword: bcrypt.hashSync('password3'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { ...options, validate: true } 
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-User', 'Demo-User2', 'Demo-User3'] },
    });
  },
};
