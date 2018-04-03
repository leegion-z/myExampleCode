<?php
	// while - 只要指定的条件成立，则循环执行代码块
	// do...while - 首先执行一次代码块，然后在指定的条件成立时重复这个循环
	// for - 循环执行代码块指定的次数
	// foreach - 根据数组中每个元素来循环代码块

	$x=array("one","two","three");
	foreach ($x as $value) {
		echo  $value . "<br>";
	}

	$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
	foreach($age as $key=>$value) {
		echo $key . $value . '<br>';
	}

	foreach ($x as $key=>$value) {
		echo $key . $value . '<br>';
	}
?>