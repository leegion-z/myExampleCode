<?php
	$user = $_POST['user'];
	$password = $_POST['password'];
	echo '{"user":"' . $user . '","password":"' . $password . '"}';
?>