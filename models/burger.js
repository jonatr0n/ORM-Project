// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	//calls orm for selectAll, adding burgers into the mysql command
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	//calls orm for insertOne, adding values into the call, then callback
	add: function(val, cb){
		orm.insertOne("burgers", ["burger_name", "devoured"], [val, '0'], function(res){
		cb(res);
		});
	},
	//calls orm for updateOne, adding values into the call, then callback
	update: function(id, cb){
		orm.updateOne('burgers','devoured','1', 'id', id,function(res){
			cb(res);
		});
	}
}//end of burger object

module.exports = burger;