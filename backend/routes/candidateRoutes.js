
const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, skills } = req.body;
    const newCandidate = await Candidate.create({ name, email, phone, skills });
    res.status(201).json({ message: 'Candidate registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
