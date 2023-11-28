require('dotenv').config();

module.exports = {
  dialect: process.env.DIALECTDB || 'mysql',
  host: process.env.HOSTDB || 'localhost',
  username: process.env.USERNAMEDB || '',
  password: process.env.PASSDB || '',
  database: process.env.NAMEDB || '',
  define: {
    timestamps: true,
    underscored: true,
  }
}