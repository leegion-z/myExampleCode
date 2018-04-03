var express = require('express');
var router = express.Router();

var User = require("../model/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{isShow:false});
});

router.post("/validate",function(req,res){

	// req.body
	
	User.find({
		email:req.body.email,
		password:req.body.password
	},function(error,info){
		if(!error){
			console.log(info);
			if(info.length==0){
				res.render('login',{isShow:true});
			}else{
				//设置session 对有效

				req.session.kerwin= info[0]
				res.redirect("/");// 跳转首页
			}
		}else{
			console.log(error);
		}
	})
})


module.exports = router;


/*

	var session= {}


	sesssion["aaaa"] = {kerwin:true}
	sesssion["bbbb"] =  {}

	sesssion["cccc"] = {}

	sesssion["ddddd"] ={}
 */