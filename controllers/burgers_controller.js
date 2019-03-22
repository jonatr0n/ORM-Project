var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//shows path at /index
router.get('/', function(req, res) {
    burger.all(function(data) {
        //console.log({ burger: data });
        res.render('index', { burger: data });
    });
});

//shows path at /burgers/new where new data is posted but takes user back to /
router.post("/burgers/new", function(req, res) {
    burger.add(
        req.body.burgerName,
        function() {
            res.redirect("/");
        });
});
//shows path at /burgers/eat where burgers are devoured but takes user back to /
router.put("/burgers/eat", function(req, res){
	console.log(req.body.burger_id);
	burger.update(req.body.burger_id, function(){
		res.redirect("/");
	});
});
// Export routes for server.js to use.
module.exports = router;
