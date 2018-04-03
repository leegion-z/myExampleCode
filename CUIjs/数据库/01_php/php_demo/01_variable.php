<?php
	//定义变量
	$num = 3;

	//作用域：全局和局部
	$x = 3;								//全局作用域
	$y = 4;								//全局作用域

	
	function func() {
		$x = 10;						//局部变量
		echo "<p>测试函数内变量:<p>";
		echo "变量 x 为:" . $x;

		echo "<p>函数内访问全局变量:<p>";
		echo '变量 x 为:' . $GLOBALS["x"];
		global $y;
		echo "<p>变量 y 为：" . $y . "</p>";
	}

	func();

	echo "<p>测试函数外变量:<p>";
	echo "变量 x 为:" . $x;
	echo "<br>";
	echo "变量 y 为:". $y;
?>