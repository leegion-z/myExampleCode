<?php
	$servername = 'localhost';
	$mysql_user = 'root';
	$mysql_password = '';
	$db_name = 'ec';

	$conn = new mysqli($servername, $mysql_user, $mysql_password, $db_name);

	if($conn->connect_error) {
		die('连接失败.原因:' . $conn->connect_error);
	}

	mysqli_query($conn, 'set names utf8');

?>