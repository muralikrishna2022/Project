const express = require('express');
const User = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const Note = await User.getAllUsers();
      res.send(Note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let user = await User.login(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router;
