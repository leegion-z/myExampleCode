<?php
	$username = $_POST["username"];
	$password = $_POST["password"];

	include 'connect.php';

	$checkSql = "SELECT * FROM `users` WHERE name=%s";
	$checkSql = sprintf($checkSql, $username);

	$result = mysqli_query($conn, $checkSql);

	$resp = array(
		"ret"=>false
		);

	header("content-type:text/json");
	
	if ($result) {
		$resp["msg"] = "user existed";
		echo json_encode($resp);
		return;
	}

	$regSql = "INSERT INTO  `users` (`user`, `password`) VALUES ('%s', '%s')";
	$regSql = sprintf($regSql, $username, md5($password));
	$result = mysqli_query($conn, $regSql);

	if ($result) {
		$resp["ret"] = true;
		echo json_encode($resp);
	} else {
		echo json_encode($resp);
	}

?>