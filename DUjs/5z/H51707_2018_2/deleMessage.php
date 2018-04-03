<?php


	require_once('connect.php');

	$id = $_REQUEST['id'];

	$sql = "delete from message where id = $id";

	$query = mysqli_query($con,$sql);

	if($query){
		echo '{"code":"0"}';
	}
	else{
		echo '{"code":"1"}';
	}

?>