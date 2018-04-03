<?php

	require_once('connect.php');

	$username = $_REQUEST['username'];
	$textcontent = $_REQUEST['textcontent'];

	$sql = "insert into message(username,content) values('$username','$textcontent')";

	$query = mysqli_query($con,$sql);

	if($query){
		echo '{"code":"0","id":"'. mysqli_insert_id($con) .'"}';
	}
	else{
		echo '{"code":"1"}';
	}

?>