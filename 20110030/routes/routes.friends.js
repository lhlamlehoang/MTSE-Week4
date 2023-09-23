const express = require('express');
const {getAllFriend} = require('../controllers/controllers.friendcontroller');
const {getFriendById} = require('../controllers/controllers.friendcontroller');
const {addFriendById} = require('../controllers/controllers.friendcontroller');
const {getFriendByMessage} = require('../controllers/controllers.friendcontroller');
const {getFriendByMessageId} = require('../controllers/controllers.friendcontroller');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date(Date.now()))
  next()
})
// define the home page route
router.get('/', getAllFriend);
router.get('/20110030/:friendID', getFriendById);
router.post('/20110030/:friendID', addFriendById);
router.get('/message', getFriendByMessage);
router.get('/message/:friendID', getFriendByMessageId)
// define the about route

module.exports = router