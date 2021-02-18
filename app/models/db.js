const dbConfig = require("../config/db.config.js");
const { Connection } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: dbConfig.USER,
      password: dbConfig.PASSWORD
    },
    type: "default"
  },
  server: dbConfig.SERVER,
  options: {
    database: dbConfig.DB,
    encrypt: true
  }
};

const connection = new Connection(config);

connection.on('connect', function (err) {
  // If no error, then good to proceed.
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
  }
});

module.exports = connection;