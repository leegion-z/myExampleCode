<?php

	//echo '{"username":"hello"}';

	//当前php页面的编码
	header('Content-Type:text/html; charset=utf-8'); 
	//链接数据库
	$con = mysqli_connect('localhost','root','','h51707');
	//指定往数据库添加数据的编码
	mysqli_query($con,'set names utf8');

	$sql = " select id,username from reg ";

	$query = mysqli_query( $con , $sql );

	//fetch操作，每次只能得到集合中的一条数据。

	/*$row = mysqli_fetch_row($query);

	print_r( $row );

	$row = mysqli_fetch_row($query);

	print_r( $row );

	$row = mysqli_fetch_row($query);

	print_r( $row );*/

	/*while($row = mysqli_fetch_row($query)){   //返回数值数组格式
		print_r( $row[1] );
	}*/

	/*while($row = mysqli_fetch_assoc($query)){   //返回关联数组格式
		print_r( $row['username'] );
	}*/

	/*while($row = mysqli_fetch_array($query)){   //返回数值数组和关联数组格式
		print_r( $row );
	}*/

	/*while($row = mysqli_fetch_object($query)){   // 返回对象格式
		print_r( $row->username );
	}*/

	while($row = mysqli_fetch_assoc($query)){   //返回关联数组格式
		$arr[] = $row;
	}

	echo json_encode($arr);

?>