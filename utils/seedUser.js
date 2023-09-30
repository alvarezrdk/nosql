const User = require("../models/User");

const seedusers = [
      {
        username: 'username1',
        email: 'username1@nosql.com'
      },
      {
        username: 'username2',
        email: 'username2@nosql.com'
      },
      {
        username: 'username3',
        email: 'username3@nosql.com'
      },
      {
        username: 'username4',
        email: 'username4@nosql.com'
      },
    ];  

    const seedUsers = () => User.bulkCreate(seedusers);

module.exports = seedUsers;
