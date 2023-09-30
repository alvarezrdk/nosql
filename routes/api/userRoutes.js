const express = require('express');

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  createThought
} = require('../../controllers/userControllers');

const router = express.Router();

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// POST a new thought to a user
router.route("/:userId/thought").post(createThought);

module.exports = router;

