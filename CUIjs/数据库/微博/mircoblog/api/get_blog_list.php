<?php
	include 'connect.php';

	//得到用户名，通过用户名，得到此用户关注的所有categoryId
	$username = $_GET["username"];
	$sql = "SELECT categoryId FROM `watchedcategory` WHERE username='%s'";
	$sql = sprintf($sql, $username);
	$result = mysqli_query($conn, $sql);

	$cateIds = array();
	

	if ($result->num_rows > 0) {
		//根据所有的categoryId，从blog表中，获得相应的文章
		while ($row = $result->fetch_assoc()) {
			$cateIds[] = $row["categoryId"];
		}

		//将要执行下面这种形式的sql
		// SELECT `id`, `author`, `title`, `summary`, `content`, `timestamp`, `categoryId` FROM `blog` 
		// WHERE 
		// categoryId=1 OR categoryId=2 OR categoryId=

		$sql = "SELECT title,summary,author FROM `blog` WHERE %s";
		$len = count($cateIds);
		$condition = "categoryId=";
		for($i=0; $i<$len; $i++) {
			if($i < $len-1) {
				$condition .= $cateIds[$i] . ' OR categoryId=';
			} else {
				$condition .= $cateIds[$i];
			}
		}
		$sql = sprintf($sql, $condition);

		$result = mysqli_query($conn, $sql);

		$resp = array(
			"time"=>date('Y-m-d H:i:s'),
			"data"=>array()
			);
		if($result->num_rows) {
			while ($row=$result->fetch_assoc()) {
				$resp["data"][] = $row;
			}
			header("content-type:text/json");
			echo json_encode($resp);
		}

	} else {
		//跳转到category选择关注页面
		header("content-type:text/javascript");
		echo "location.href='/mirocblog/html/category.html'";
	}
	
?>