var fs = require('fs');
var sql = require('sql.js');
var path = require('path');
var bfr = fs.readFileSync(path.resolve(__dirname, 'tmp', 'db.sqlite3'));
var db = new sql.Database(bfr);
db.each('SELECT * FROM test123', function (row) {
  console.log(row);
});