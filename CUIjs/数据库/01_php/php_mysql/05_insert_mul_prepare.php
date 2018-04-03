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


	//预处理
	$statement = $conn->prepare("INSERT INTO students (name, age, city, majorId) 
									VALUES (?,?,?,?)");
	//绑定
	$statement->bind_param("sisi", $name, $age, $city, $majorId);

	//设定参数并执行插入
	$name = 'HanMeimei';
	$age = 19;
	$city = 'shenzhen';
	$majorId = 1;
	$statement->execute();

	$name = 'XuMengnan';
	$age = 19;
	$city = 'shenyang';
	$majorId = 1;
	$statement->execute();

?>