'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      { tableName: 'Events', schema: options.schema }, 
      [
        {
          venueId: 1,
          groupId: 1,
          name: 'Low Rider Limbo',
          description: 'Join our low-to-the-ground limbo contest agility course.',
          type: 'In person',
          capacity: 50,
          price: 10,
          startDate: new Date(),
          endDate: new Date(new Date().setHours(new Date().getHours() + 3)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 2,
          groupId: 2,
          name: 'Brush Your Chow Day',
          description: 'Embrace warmer weather and manage shedding with our fluff-fest.',
          type: 'In person',
          capacity: 100,
          price: 5,
          startDate: new Date(),
          endDate: new Date(new Date().setHours(new Date().getHours() + 2)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          venueId: 3,
          groupId: 3,
          name: 'Hound Day - NY Ren Faire',
          description: "Bring your hounds dressed in medieval attire for a day of jousting, music, and feasting at NY's Renaissance fair.",
          type: 'In person',
          capacity: 75,
          price: 15,
          startDate: new Date(),
          endDate: new Date(new Date().setHours(new Date().getHours() + 4)),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      { validate: true } 
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: 'Events', schema: options.schema }, 
      {
        name: {
          [Sequelize.Op.in]: ['Low Rider Limbo', 'Brush Your Chow Day', 'Hound Day - NY Ren Faire'],
        },
      }
    );
  },
};
