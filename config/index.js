const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({path: __dirname + '/.env'});
}

// console.log(require('dotenv').config())


module.exports = {
  MONGO_URI: process.env.MONGO_URI,
};
