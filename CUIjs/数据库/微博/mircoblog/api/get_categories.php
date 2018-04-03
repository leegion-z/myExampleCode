<?php
	include 'connect.php';

	$username = $_GET["username"];

	//
	$sql = "SELECT watched.username, category.name
			FROM (SELECT * FROM watchedcategory WHERE watchedcategory.username='%s') AS watched
			RIGHT JOIN category
			ON watched.categoryId=category.id
			ORDER BY category.name";

	$sql = sprintf($sql, $username);
	$all = mysqli_query($conn, $sql);

	$resp = array();
	if($all->num_rows > 0) {
		while ($row = $all->fetch_assoc()) {
			$resp[] = $row;
		}
	}

	header("content-type:text/json");
	echo json_encode($resp);
?>