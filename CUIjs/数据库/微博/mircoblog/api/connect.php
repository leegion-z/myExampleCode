<?php
	$db_sername = "localhost";
	$db_username = "root";
	$db_password = "";
	$db_name = "microblog";

	$conn = new mysqli($db_sername, $db_username, $db_password, $db_name);

	if ($conn->connect_error) {
		die("GG:" . $conn->connect_error);
	}

	mysqli_query($conn, 'set names utf8');
?>