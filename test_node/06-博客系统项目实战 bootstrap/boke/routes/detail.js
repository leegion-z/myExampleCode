var express = require('express');
var router = express.Router();
var Article = require("../model/article");

/* GET home page. */
router.get('/:id', function(req, res, next) {

  if(req.session.kerwin){

  	// console.log(req.params.id);
  	// Article.find({_id:req.params.id},function(error,info){
  	// 	if(!error){
  	// 		console.log(info);
  	// 	}
  	// })
  	
  	Article.findById(req.params.id,function(error,info){
  		if(!error){
  			// console.log(info);
  			res.render('detail', { info: info });
  		}
  	})

  	
  }else{
  	res.redirect("/login");
  }
  
});



// /detail/dwadwwa
module.exports = router;