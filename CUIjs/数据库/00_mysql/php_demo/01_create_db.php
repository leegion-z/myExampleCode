<?php
	$servername = "localhost";
	$username = "root";
	$password = "password";
	 
	// 创建连接
	$conn = new mysqli($servername, $username, $password);
	 
	// 检测连接
	if ($conn->connect_error) {
		die("连接失败: " . $conn->connect_error);
	}

	$sql = "CREATE DATABASE Students";
	if (mysqli_query($conn, $sql)) {
		echo "数据库创建成功";
	} else {
		echo "Error creating database: " . mysqli_error($conn);
	}
?>