// window.onload = function () {

// }

$(document).ready(function() {


	$('#submit').click(function () {
		//TODO: 表单验证，正则的

		var user = $('#user').val();
		var password = $('#pw').val();
		var email = $('#email').val();
		var tel = $('#tel').val();
		var gender = $('#gender').val();
		var age = $('#age').val();

		$.ajax({
			type: 'post',
			url: '../api/register.php',
			data: {
				user: user,
				password: password,
				email: email,
				tel: tel,
				gender: gender,
				age: age
			},
			success: function (resp) {
				//JSON.parse(resp);
				if(resp.result) {
					//跳转页面
					location.href = './login.html';
				} else {
					//提示信息
					alert('用户名已存在');
				}
			},
			error: function (error) {

			}
		})
	})
})