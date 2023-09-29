const connection = require('../config/connection');
const Thought = require('../models/Thought');

const seedthoughts = [
  
      {
        thoughtText: 'This is a great day!',
        username: 'username1',
      },
      {
        thoughtText: 'Feeling excited about this...!!!',
        username: 'username2',
      },
      {
        thoughtText: 'That is a great idea...!!!',
        username: 'username3',
      },
      {
        thoughtText: 'I have a different opinion...',
        username: 'username4',
      },
    ];

    const seedThought = () => Product.bulkCreate(seedthoughts);

module.exports = seedThought;
