const ExceptionDtl = require("../models/exceptionDtl.model.js");

exports.findAll = (req, res) => {
    ExceptionDtl.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving exceptions."
          });
        else res.send(data);
      });
};