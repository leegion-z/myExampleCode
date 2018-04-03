<?php
	$username = $_POST["username"];
	$password = $_POST["password"];

	include 'connect.php';

	$sql = "SELECT password FROM `users` WHERE user='%s'";
	$sql = sprintf($sql, $username);
	// echo $sql;
	$result = mysqli_query($conn, $sql);

	header("content-type: text/json");

	$resp = array(
		"ret"=> false
		);
	if ($result->num_rows > 0) {
		$row = $result->fetch_assoc();
		if($row["password"] === md5($password)) {
			$resp["ret"] = true;
			echo json_encode($resp);
			return;
		}
	}

	echo json_encode($resp);
?>