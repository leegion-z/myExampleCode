function Detail(){
	this.init();
}


Detail.prototype.init= function(){


	$.ajax({
		url:"/user/detail/id",
		data:{id:"5a335c017ba48a04d8304c9e"},
		success:function(res){
			console.log(res);

			//动态创建页面详细信息
		}
	})
}


new Detail();