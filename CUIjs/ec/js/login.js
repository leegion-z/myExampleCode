$(document).ready(function () {
	$('button').click(function () {
		$.post('../api/login.php', {
			user: $('#user').val(),
			password: $('#password').val()
		}, function (resp) {
			if(resp.result) {
				//跳转
				location.href = '../index.html';
			} else {
				//错误信息
				alert('登录失败');
			}
		})
	})
})