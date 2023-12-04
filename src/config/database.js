require('dotenv').config();

module.exports = {
  dialect: process.env.DIALECT_DB,
  host: process.env.MYSQLDB_LOCAL_HOST,
  username: process.env.MYSQLDB_LOCAL_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  }
}