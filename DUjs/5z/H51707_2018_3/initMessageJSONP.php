<?php

	require_once('connect.php');

	$page = $_GET['page'];
	$cb = $_GET['cb'];
	$len = 3;
	$index = $page * $len;

	$sql = " select * from message order by date desc limit $index , $len";

	$query = mysqli_query($con,$sql);

	if($query && mysqli_num_rows($query)){
		while($row = mysqli_fetch_assoc($query)){
			$arr[] = $row;
		}
		//echo json_encode($arr);
		echo $cb.'({"code":"0","data" : '. json_encode($arr) .' })';
	}
	else{
		echo $cb.'({"code":"1","message":"没有数据"})';
	}

?>