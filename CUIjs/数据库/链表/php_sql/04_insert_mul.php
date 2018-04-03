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

	$sql = "INSERT INTO students (name, age, city, majorId)
				VALUES ('Lily', 20, 'shanghai', 1);";
				
	$sql .= "INSERT INTO students (name, age, city, majorId)
				VALUES ('Lucy', 20, 'shanghai', 2)";

	if (mysqli_multi_query($conn, $sql)) {
		echo "数据插入成功";
	} else {
		echo "Error insert data:" . mysqli_error($conn);
	}
?>