var express = require('express');
var router = express.Router();

var User = require("../model/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: '注册页面' });
});

router.post("/validate",function(req,res){

	// req.body
	console.log(req.body);

	User.create({
		username:req.body.username,
		password:req.body.password,
		email:req.body.email
	},function(error,info){

		if(!error){
			res.redirect("/login"); //跳转到登录页面
		}else{
			console.log(error);	
		}
	})
})


module.exports = router;
