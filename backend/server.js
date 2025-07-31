
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3306;

const sequelize = require('./sequelize');
const Candidate = require('./models/Candidate');

app.use(cors());
app.use(bodyParser.json());

const candidateRoutes = require('./routes/candidateRoutes');
app.use('/api', candidateRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
