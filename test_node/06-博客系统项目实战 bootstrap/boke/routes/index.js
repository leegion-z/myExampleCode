var express = require('express');
var router = express.Router();
var Article  =require("../model/article");
/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.kerwin){
  	//查article 集合 ，list列表
  	//
  	Article.find({},function(error,info){
  		if(!error){
  			console.log(info);
  			res.render('index', { list:info });
  		}

  		
  	})
  	
  }else{
  	res.redirect("/login");
  }
  
});


// name=kerwin&age=100

// {
// 	name:"kerwin",
// 	age:100
// }

router.get("/destroy",function(req,res){
	//注销
	req.session.destroy(function(error){
		if(!error){
			res.redirect("/login");
		}
	})
})

module.exports = router;
