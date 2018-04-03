<?php
	//String（字符串）, 
	$txt1 = "Hello!";
	$txt2 = 'world';

	$txt3 = $txt1 . $txt2;

	//字符访问
	echo '$txt3[4]=' . $txt3[4];

	//strlen() 函数返回字符串的长度（字符数）
	strlen($txt3);

	

	//strpos() 函数用于在字符串内查找一个字符或一段指定的文本。
	//如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE
	echo strpos($txt3, $txt2);
	
	//Integer（整型）, Float（浮点型）, 
	$int = 3;
	$float = 3.3;

	//Boolean（布尔型）, 
	$bool = true;

	//Array（数组）: 1. PHP 数值数组, 2. PHP 关联数组
	
	//1. PHP 数值数组（遍历使用for循环）
	$cars=array("Volvo", "BMW", "Toyota");
	echo $cars[1];
	
	// count() 函数用于返回数组的长度（元素的数量）：
	echo count($cars);
	
	//2. PHP 关联数组（遍历使用foreach循环）
	$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
	//or
	$age['Peter']="35";
	$age['Ben']="37";
	$age['Joe']="43";


	foreach($age as $x=>$x_value) {
		echo "Key=" . $x . ", Value=" . $x_value;
		echo "<br>";
	}


	//Object（对象）, 

	//NULL（空值）
?>