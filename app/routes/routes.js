module.exports = (app) => {
    const exceptionDtl = require("../controllers/exceptionDtl.controller.js");
  
    // Retrieve all Exception_DTL
    app.get("/exceptionType", exceptionDtl.findAll);

  };