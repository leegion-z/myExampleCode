<?php

	//当前php页面的编码
	header('Content-Type:text/html; charset=utf-8'); 
	//链接数据库
	$con = mysqli_connect('localhost','root','','h51707');
	//指定往数据库添加数据的编码
	mysqli_query($con,'set names utf8');

	$len = $_GET['len'];

	// limit 两个参数 : 第一个是起始位置，第二个是长度	
	$sql = "select * from banner limit 0 , $len";

	$query = mysqli_query($con,$sql);

	while($row = mysqli_fetch_assoc($query)){
		$arr[] = $row;
	}

	echo json_encode($arr);

?>