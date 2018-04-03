<?php
	include 'connect.php';

	$cate = $_GET["cate"];
	$username = $_GET["username"];

	$sql = "SELECT id FROM `category` WHERE name='%s'";
	$sql = sprintf($sql, $cate);
	// echo $sql;
	$result = mysqli_query($conn, $sql);
	header("content-type:text/json");
	if ($result->num_rows > 0) {
		$id = $result->fetch_assoc()["id"];
		$sql = "SELECT * FROM `watchedcategory` WHERE categoryId=%d";
		$sql = sprintf($sql, $id);
		// echo $sql;
		$result = mysqli_query($conn, $sql);
		if ($result->num_rows > 0) {
			//话题已经被关注，再次点击后，取消关注
			$sql = "DELETE FROM `watchedcategory` WHERE categoryId=%d AND username='%s'";
			$sql = sprintf($sql, $id, $username);
			$result = mysqli_query($conn, $sql);
			if ($result) {
				echo '{"watched": false}';
				return;
			}
		} else {
			//话题没被关注，再次点击后，关注此话题

			$sql = "INSERT INTO `watchedcategory` (username, categoryId) VALUES ('%s', %d)";
			$sql = sprintf($sql, $username, $id);
			$result = mysqli_query($conn, $sql);
			if ($result) {
				echo '{"watched": true}';
				return;
			}
		}
	}
?>