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

	$sql = "UPDATE students SET age=10 WHERE name='HanMeimei'";
	$result = mysqli_query($conn, $sql);

	if ($result) {
		echo "更新成功";
	} else {
		echo "更新失败";
	}
?>