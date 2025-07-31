
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Candidate = sequelize.define('Candidate', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  skills: { type: DataTypes.STRING }
});

module.exports = Candidate;
