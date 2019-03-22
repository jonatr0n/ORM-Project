
// Requires connection.js
var connection = require("../config/connection.js");


// ORM calls
var orm = {
    //selectAll will take tableName and call back, will take all from  the table and show response as queryString
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    //insertOne will take tableName, columns, values and callback
    insertOne: function (tableName, columns, values, cb) {
        //This will format the array into comma seperated values
        var formattedColumns = columns.join(',');
        //Similar as will take the values from above and map them into a new array, returning values in quotes
        var formattedValues = values.map(function (value) {
            return "'" + value + "'";
        })
        //adds commas, no spaces
        formattedValues = formattedValues.join(',');
        //Mysql command to put the above formatted values into specidied table, colums get values, show results if no errors
        var queryString = 'INSERT INTO ' + tableName + ' (' + formattedColumns + ') VALUES (' + formattedValues + ');'
        console.log(queryString)
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //updateOne takes tableName, column, val1, column1, column2, val2, callback
    updateOne: function (tableName, column, val1, column2, val2, cb) {
        //Myspql command updating a column in a table a new value under the previous column
        var queryString = "UPDATE " + tableName + " SET " + column + '=' + val1 + " WHERE " + column2 + "=" + val2 + ';'
        console.log(queryString)
        //Exapmple UPDATE `burgers` SET `devoured`='1' WHERE `id`='2';*/
        //show results if no errors
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
} 

// Export the orm object 
module.exports = orm;
