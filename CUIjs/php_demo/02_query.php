<?php
	include './connect.php';

	$sql = "SELECT `id`, `age`, `gender` 
			FROM `users` 
			WHERE `users`.`gender`='F'
			ORDER BY `age` DESC";

	$ret = mysqli_query($conn, $sql);
	$resp = array();

	if($ret->num_rows>0) {
		//查询到了数据
		while($row = $ret->fetch_assoc()) {
			// echo '------------------<br>';
			// echo $row['id'] . '<br>';
			// echo $row['age'] . '<br>';
			// echo $row['gender'] . '<br>';
			// echo '------------------<br>';
			$resp[] = $row;	//相当于js中数组的push操作
		}

		echo json_encode($resp);
		
	}

?>