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

?>