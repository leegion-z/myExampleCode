<?php
	$servername = "localhost";
	$username = "root";
	$password = "password";
	$dbName = "Students";
	 
	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbName);
	 
	// 检测连接
	if ($conn->connect_error) {
		die("连接失败: " . $conn->connect_error);
	}

	$sql = "CREATE TABLE students (
				id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
				name VARCHAR(30) NOT NULL,
				age INT(3) UNSIGNED NOT NULL,
				city VARCHAR(50),
				majorId INT(6) UNSIGNED
			)";

	if (mysqli_query($conn, $sql)) {
		echo "students表创建成功";
	} else {
		echo "Error creating database: " . mysqli_error($conn);
	}
?>