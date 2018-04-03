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

	$sql = "SELECT * FROM students";
	$result = mysqli_query($conn, $sql);

	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			echo "<br> id:" . $row["id"] ." name:" . $row["name"];
		}
	} else {
		echo "Error query data:" . '0 个结果';
	}
?>