<?php
	//当前php页面的编码
	header('Content-Type:text/html; charset=utf-8'); 
	//链接数据库
	$con = mysqli_connect('localhost','root','','h51707');
	//指定往数据库添加数据的编码
	mysqli_query($con,'set names utf8');

	//$username = $_GET['username'];
	//$password = $_GET['password'];
	//$username = $_POST['username'];
	//$password = $_POST['password'];
	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];

	$sql = "select * from reglist where username = '$username'";
	$query = mysqli_query($con,$sql);

	if($query && mysqli_num_rows($query) ){
		echo '已经有人注册了';
		echo '<script> setTimeout(function(){ history.back() },1000); </script>';
	}
	else{
		$sql = "insert into reglist(username,password) values('$username','$password')";
		$query = mysqli_query($con,$sql);
		if($query){
			echo '注册成功！！！';
			echo '<script> setTimeout(function(){ window.location.href = "login.html" },1000); </script>';
		}
		
	}


	//echo '接收到的用户名：' . $username .' 密码：' . $password;



?>