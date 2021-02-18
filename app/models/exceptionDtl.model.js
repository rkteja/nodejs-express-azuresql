const connection = require("./db.js");
const { Request } = require("tedious");

// constructor
const ExceptionDtl = function(exceptionDtl) {
    this.ruleId = exceptionDtl.ruleId;
    this.exceptionType = exceptionDtl.exceptionType;
    this.tableName = exceptionDtl.tableName;
};

ExceptionDtl.getAll = (result) => {
  const request = new Request(
    `SELECT * FROM EXCEPTION_DTL`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
        result(null, err);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);

};

module.exports = ExceptionDtl;