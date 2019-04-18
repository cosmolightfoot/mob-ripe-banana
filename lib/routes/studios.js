const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
  .post('/', (req, res, next) => {
    console.log(req.body);
    const {
      name,
      address: {
        city, 
        state,
        country
      }
    } = req.body;

    Studio
      .create({ name, address: { city, state, country } })
      .then(studio => res.send(studio))
      .catch(next);
  });
