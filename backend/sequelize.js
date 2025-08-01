
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql'
});
console.log('Connecting to DB with:');
console.log('DB:', process.env.MYSQL_DB);
console.log('USER:', process.env.MYSQL_USER);
console.log('HOST:', process.env.MYSQL_HOST);
module.exports = sequelize;
