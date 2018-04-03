<?php
	$user = $_POST['user'];
	$pw = $_POST['password'];

	$servername = 'localhost';
	$mysql_user = 'root';
	$mysql_password = '';
	$db_name = 'ec';

	$conn = new mysqli($servername, $mysql_user, $mysql_password, $db_name);

	if($conn->connect_error) {
		die('连接失败.原因:' . $conn->connect_error);
	}

	$sql = "SELECT `password` FROM `users` WHERE `users`.`username`='%s'";
	$sql =sprintf($sql, $user);
	$ret = mysqli_query($conn, $sql);
	header('content-type: text/json');

	if($ret->num_rows == 0) {
		//用户不存在
		echo '{"result": false}';
		return;
	}


	//用户存在 ，检测密码是否正确
	$row = $ret->fetch_assoc();
	if($pw == $row['password']) {
		//登录成功
		header('set-cookie:' . 'username=' . $user .';path=/ec/');
		//session也可以记录登录状态
		//负载均衡的情况下，session记录登录状态会有问题，使用redis数据库记录登录状态
		echo '{"result": true}';
	} else {
		//登录失败
		header('set-cookie:' . 'username="";path=/ec/');
		echo '{"result": false}';
	}
?>