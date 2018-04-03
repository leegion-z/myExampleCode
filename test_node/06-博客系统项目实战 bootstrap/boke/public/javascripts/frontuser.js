console.log("frontuser work");


// $.ajax({
// 	url:"",
// 	data:{},
// 	dataType:"json",
// 	success:function(){

// 	}
// })


function User(){


	this.init();
}


User.prototype.init= function(){

	var  _this = this;
	$.ajax({
		url:"/user/list",
		data:{limit:2,offset:0},
		dataType:"json",
		success:function(res){
			console.log(res);

			_this.renderList(res.list);
			_this.renderPagination(res.total);
		}
	})
}


User.prototype.renderList = function(list){

	var basedata= `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjA2ODE3ODU4YSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2MDY4MTc4NThhIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzk2ODc1IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==`


	for(var i=0;i<list.length;i++){

		var $div = $(`<div kerwinid=${list[i]._id}>`).html(`
			<div class="media" >
			  <div class="media-left">
			    <a href="#">
			      <img class="media-object" src=${list[i].filepath?list[i].filepath:basedata} alt="...">
			    </a>
			  </div>
			  <div class="media-body">
			    <h4 class="media-heading">${list[i].title}</h4>
			    
			  </div>
			</div>
		`)

		$div.click(function(ev){
			// console.log();
			var id= $(ev.currentTarget).attr("kerwinid");
			// console.log();
			location.href=`/user/detail/?id=${id}`;
		})

		$(".list").append($div);
	}
}

User.prototype.renderPagination = function(total){

	// console.log(total);
	var _this =this;
	for(var i=0;i<total;i+=2){

		var $li =  $("<li>").html('<a href="#">'+(i/2+1)+'</a>');

		$li.click(function(ev){
			console.log(ev.target.innerHTML);

			_this.rerenderList(ev.target.innerHTML);
		})

		$li.appendTo($(".pagination"));
	}
}


User.prototype.rerenderList = function(index){

	// 清空原数据
	$(".list").empty();

	var _this =this;
	$.ajax({
		url:"/user/list",
		data:{limit:2,offset:2*(index-1)},
		dataType:"json",
		success:function(res){
			console.log(res);
			_this.renderList(res.list);
		}
	})
}


new User();