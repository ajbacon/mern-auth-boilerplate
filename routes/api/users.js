const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// import input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// import user model
const User = require('../../models/User');

// rout: POST api/users/register
// desc: Register new user
// access: public

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password
      });
    }

    // hash password before saving new user
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(console.log(err));
      });
    });
  });
});
