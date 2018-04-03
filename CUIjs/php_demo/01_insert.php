<?php
	$servername = 'localhost';
	$db_username = 'root';
	$db_password = '';
	$db_name = 'ec';

	$conn = new mysqli($servername, $db_username, $db_password, $db_name);

	if($conn->connect_error) {
		// echo '连接失败。原因：' . $conn->connect_error;
		// return;
		die('连接失败。原因：' . $conn->connect_error);
	}

	$sql = "INSERT INTO `users` 
			(`id`, `username`, `password`, `tel`, `email`, `gender`, `age`)
			VALUES
			(NULL, 'qianfeng', '123456', '13912345678', 'qianfeng@qq.com', 'F', 8)";
	$ret = mysqli_query($conn, $sql);
	if($ret) {
		echo '插入成功';
	} else {
		echo '再试一次';
	}


?>