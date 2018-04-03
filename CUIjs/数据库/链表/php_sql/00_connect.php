<?php
	$servername = "localhost";
	$username = "root";
	$password = "password";
	 
	// 创建连接
	$conn = new mysqli($servername, $username, $password);
	 
	// 检测连接
	if ($conn->connect_error) {
		//输出一个语句，并退出php代码
		die("连接失败1111: " . $conn->connect_error);
	}

	echo "连接成功";
?>