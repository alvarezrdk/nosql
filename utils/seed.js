const seedUser = require('./seedUser');
const seedThought = require('./seedThought');
const seedFriend = require('./seedFriend');
const seedReaction = require('./seedReaction');

const seedAll = async () => {
  
    await seedUser();
    // await seedThought();
    // await seedFriend();
    // await seedReaction();

  process.exit(0);
};

seedAll();
