const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { user_email, user_password } = res.body;
  console.log('req.body: ', req.body);

  let user = await User.findOne({ user_email });
  if(user) {
    return res.status(400).send('User with that email already exists');
  }

  try {
    user = new User(req.body);
    user.user_password = await bcrypt.hash(user_password, 8);

    await user.save();
    res.status(201).send();
  } catch(e) {
    res.status(500).send('uh-oh, something went wrong... try again later');
  }
});

module.exports = router;