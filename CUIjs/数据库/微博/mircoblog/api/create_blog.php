<?php
	include 'connect.php';

	$username = $_POST["username"];
	$title = $_POST["title"];
	$summary = $_POST["summary"];
	$content = $_POST["content"];
	$category = $_POST["category"];

	$sql = "SELECT id FROM `category` WHERE name='%s'";
	$sql = sprintf($sql, $category);
	// echo $sql;
	$result = mysqli_query($conn, $sql);

	header("content-type:text/json");
	
	if ($result->num_rows > 0) {
		$id = $result->fetch_assoc()["id"];

		$sql = "INSERT INTO `blog` (author, title, summary, content, categoryId) 
				VALUES ('%s', '%s', '%s', '%s', %d)";
		$sql = sprintf($sql, $username, $title, $summary, $content, $id);
		if(mysqli_query($conn, $sql)) {
			echo '{"ret": true}';
			return;
		}
	}

	echo '{"ret": false}';


?>