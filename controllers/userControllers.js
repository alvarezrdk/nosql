const User = require('../models/User');
const Thought = require('../models/Thought');

const userControllers = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts friends');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts friends');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Invalid user ID' });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Could not create user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: 'Could not update user' });
    }
  },

  

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User and associated thoughts deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Could not delete user' });
    }
  },

  addFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      
      const friend = await User.findById( {_id: req.params.friendId});
      console.log(friend);
 
      const user = await User.findByIdAndUpdate(
        { _id: userId},
        { $addToSet: { friends: friendId } }, { new: false });
        console.log(user);
 
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Could not add friend' });
    }
   },

  removeFriend: async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Could not remove friend' });
    }
  },

  createThought: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thoughts: req.body } }
      );

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ message: "User Thought Created!" });
    } catch (error) {
      res.status(400).json({ error: "Could not create Thought" });
    }
  },
};

module.exports = userControllers;
