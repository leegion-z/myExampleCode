var express = require('express');
var router = express.Router();
var Article  =require("../model/article");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { });
});


router.get("/list",function(req,res){

  var offset = req.query.offset; //skip几个数据
  var limit = req.query.limit; //  限制取几个数据



  // Article.find({},{},{skip:offset,limit:limit},function(error,info){
  //   if(!error){
      
  //   }
  // })

  // //计算某个集合中多少个文档
  // Article.count({},function(error,info){

  // 	if(!error){
  // 		console.log(info)
  // 	}
  // })

//等待两个异步都结束了之后， 才会调用then 的回调函数
  Promise.all([
  	Article.find({},{},{skip:offset,limit:limit}),
  	Article.count()
  	]).then(function(data){
  		res.send({
  			total:data[1],
  			list:data[0]
  		});
  })
  
})



router.get("/detail",function(req,res){

	res.render("userdetail");
})

router.get("/detail/id",function(req,res){

  res.send("userdetail");
})


module.exports = router;
