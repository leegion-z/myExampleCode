<?php

	//当前php页面的编码
	header('Content-Type:text/html; charset=utf-8'); 
	//链接数据库
	$con = mysqli_connect('localhost','root','','h51707');
	//指定往数据库添加数据的编码
	mysqli_query($con,'set names utf8');

?>