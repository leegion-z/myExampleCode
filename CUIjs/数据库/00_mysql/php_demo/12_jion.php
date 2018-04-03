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

	$sql = "SELECT students.name,students.age,students.city,major.name AS majorName
			FROM students LEFT JOIN major
			ON students.majorId=major.id";
	$result = mysqli_query($conn, $sql);
	$array = array();

	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			$array[] = $row;
		}

		echo json_encode($array);

	} else {
		echo "Error query data:" . '0 个结果';
	}
?>