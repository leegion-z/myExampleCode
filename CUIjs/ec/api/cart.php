<?php
	include './connect.php';

	$user = $_GET['user'];

	$sql = 'SELECT `id` FROM `users` WHERE `users`.`username`="%s"';
	$sql = sprintf($sql, $user);

	$ret = mysqli_query($conn, $sql);
	$row = $ret->fetch_assoc();
	$userid = $row['id'];

	$sql = "SELECT `products`.`id`,`products`.`name`,`products`.`price`,`products`.`img` AS imgSrc,`products`.`description`,`cart`.`count`
			FROM `products` INNER JOIN `cart`
			ON `products`.id=`cart`.`productid`
			WHERE `cart`.`userid`=%d";

	$sql = sprintf($sql, $userid);

	$ret = mysqli_query($conn, $sql);

	$array = array();
	header('content-type: text/json');
	if($ret->num_rows > 0) {
		while($row = $ret->fetch_assoc()) {
			$array[] = $row;
		}

		echo json_encode($array);
	} else {
		echo '[]';
	}
?>