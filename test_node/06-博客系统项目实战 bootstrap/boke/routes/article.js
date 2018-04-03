var express = require('express');
var router = express.Router();
var Article = require("../model/article");

var multer = require("multer");
// var upload = multer({ dest: 'public/kerwinuploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/kerwinuploads/') //存储文件的路径
  },
  filename: function (req, file, cb) {
    cb(null, "kerwin"+file.fieldname + '-' + Date.now())
  }
}) //文件的名字

var upload = multer({ storage: storage })




/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.kerwin){
  	res.render('article', { title: 'Express',isnew:true });
  }else{
  	res.redirect("/login");
  }
  
});
// 发表文章 存储数据
router.post("/post",upload.single('myphoto'),function(req,res){

	// req.body
	/*
			upload.single 获取单张图片， req.file
			upload.array 获取多张图片, req.files
	 */
	
	console.log(req.file);

	Article.create({
			title:req.body.title,
			content:req.body.content,
			author:req.session.kerwin.username,
			filepath:req.file?"/kerwinuploads/"+req.file.filename:null
	},function(error,info){

		if(!error){
			res.redirect("/"); //跳转到首页
		}
	})

})

//  <img src= <%= info.filepath%> />


//文章更新 路由
router.get("/update",function(req,res){

	// req.query.id
	// 
	Article.findById(req.query.id,function(error,info){
		if(!error){
			res.render('article', { title: 'Express' ,isnew:false,info:info});
		}
	})
	

})
// 文章更新 存储数据
router.post("/update",function(req,res){

	console.log(req.body);

	Article.findByIdAndUpdate(req.body.id,{$set:{
		title:req.body.title,
		content:req.body.content
	}},function(error,info){
		if(!error){
			res.redirect("/");
		}
	})
})

//文章移除
router.get("/remove",function(req,res){

	// req.query.id
	// findByIdAndRemove
	Article.findByIdAndRemove(req.query.id,function(error,info){
		if(!error){
			res.redirect("/");
		}
	})
	

})


module.exports = router;