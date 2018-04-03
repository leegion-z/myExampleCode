var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划


var  obj = {
	title:String,
	content:String,
	author:String,
	filepath:String
}



var model = mongoose.model("article",new Schema(obj));

// articles 
// 
// 
//  模型 --> articles 这个集合(表)

module.exports = model;

