<?php

	require_once('connect.php');

	$id = $_REQUEST['id'];

	$sql = "select * from message where id = $id";

	$query = mysqli_query($con,$sql);

	if($query && mysqli_num_rows($query)){
		$row = mysqli_fetch_assoc($query);
		$count = $row['count'];
		$count++;
		$sql = "update message set count = $count where id = $id";
		$query = mysqli_query($con,$sql);
		if($query){
			echo '{"code":"0","count" : '. $count .'}';
		}
		else{
			echo '{"code":"1"}';
		}
	}

?>