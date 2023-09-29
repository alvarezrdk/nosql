const connection = require('../config/connection');
const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');

const seedReaction = async () => {
  try {
    const thoughts = await Thought.find();

    if (thoughts.length >= 3) {
      const thought1 = thoughts[0];
      const thought2 = thoughts[1];

      const reactions = [
        {
          reactionBody: 'Great!!!',
          username: 'username2',
          thoughtId: thought1._id,
        },
        {
          reactionBody: 'Good Job!!!',
          username: 'username1',
          thoughtId: thought2._id,
        },
        {
          reactionBody: 'Not my thing ;-(',
          username: 'username3',
          thoughtId: thought2._id,
        },

      ];

      await Reaction.insertMany(reactions);

      console.log('Reactions seeded successfully');
    } else {
      console.error('Not enough thoughts to create reactions');
    }
  } catch (error) {
    console.error('Error seeding reactions:', error);
  } finally {
    connection.close();
  }
};

module.exports = seedReaction;
