<?php
	$servername = 'localhost';
	$db_username = 'root';
	$db_password = '';

	$conn = new mysqli($servername, $db_username, $db_password);

	if($conn->connect_error) {
		echo '数据库连接失败。原因是：' . $conn->connect_error;
		return;
	}

	echo '连成成功'

?>