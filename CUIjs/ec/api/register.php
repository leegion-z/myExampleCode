<?php
	$user = $_POST['user'];
	$password = $_POST['password'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$gender = $_POST['gender'];
	$age = $_POST['age'];

	//TODO: test data
	$email = '1@qq.com';
	$tel = '13999999999';
	$gender = 'M';
	$age = '30';
	
	$servername = 'localhost';
	$mysql_user = 'root';
	$mysql_password = '';
	$db_name = 'ec';

	$conn = new mysqli($servername, $mysql_user, $mysql_password, $db_name);

	if($conn->connect_error) {
		die('连接失败.原因:' . $conn->connect_error);
	}

	// $sql = "SELECT `id` FROM `users` WHERE `users`.`username`='" . $user . "'";
	// $sql = "SELECT `id` FROM `users` WHERE `users`.`username`='$user'";
	//字符串的格式化操作
	$sql = "SELECT `id` FROM `users` WHERE `users`.`username`='%s'";
	$sql = sprintf($sql, $user);
	$ret = mysqli_query($conn, $sql);
	header('Content-Type: text/json');

	if($ret->num_rows > 0) {
		//用户名存在，错误
		echo '{"result":false}';
		return;
	}

	$sql = "INSERT INTO `users`
			(`id`, `username`, `password`, `tel`, `age`, `email` ,`gender`)
			VALUES
			(NULL, '%s', '%s', '%s', '%d', '%s', '%s')";

	$sql = sprintf($sql, $user, $password, $tel, $age, $email, $gender);
	$ret = mysqli_query($conn,$sql);

	if($ret) {
		//注册成功
		echo '{"result":true}';
	} else {
		//注册失败
		echo '{"result":false}';
	}



?>