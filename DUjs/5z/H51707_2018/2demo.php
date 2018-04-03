<?php


	//echo、print 一般都用于输出一个字符串 echo可以输出多个字符串
	
	//echo 'a' , 'b';

	//print 'a';

	//echo 'a' , 'b';
	//echo '<br>';
	//echo 'c';

	//print_r() : 输出对象或数组类型
	//print_r( array('a','b','c') );

	//var_dump( array('a','b','c') );    //输出，并且显示类型
	//var_dump( 1111.2222 );

	
	//var foo = 'hello';  //js
	//$foo = 'hello';    //当foo不存在的话，表示即创建了一个变量又使用这个变量
	//echo $foo . 'world';    //php中用点进行字符串连接
	
	//php中的单引号和双引号的问题
	//双引号里可以直接识别出变量，注意变量一定是独立的整体
	//$foo = 'hello';   
	//echo "$foo world";

	// $a = 10;

	// function foo(){
	// 	$a = 20;
	// 	//echo $a;
	// 	//echo $GLOBALS['a'];
	// 	echo $a;
	// 	global $a;
	// 	echo $a;
	// }

	// foo();
	// echo $a;

	
	//$foo = 'hello';
	//echo strlen($foo);    //字符串的长度
	//var_dump( strpos($foo, 'w') );   //字符串的位置，如果没有找到返回false

	//header('Content-Type:text/html; charset=utf-8'); 
	//echo '<h1>title</h1>';
	// $foo = false;

	// if($foo){
	// 	echo '真';
	// }
	// else{
	// 	echo '假';
	// }


	//数组
		//数值数组
		//关联数组

	//数值数组
	// $arr = array('a','b','c');

	// //print_r( $arr[1] );

	// $arr[1] = 'd';
	
	// print_r( $arr );
	// echo count($arr);   //打印数组的长度

	//关联数组
	//$arr = array('username'=>'xiaoming','age'=>'20');
	//$arr['job'] = 'it';
	//print_r( $arr['age'] );

	//循环：
	// $arr = array('a','b','c');

	// for($i=0;$i<count($arr);$i++){
	// 	echo $arr[$i] . '<br>';
	// }
	
	/*$arr = array('username'=>'xiaoming','age'=>'20');

	forEach( $arr as $key => $val ){
		//echo $key . '<br>';
		echo $val . '<br>';
	}*/

	/*$arr = array('a','b','c');

	$i = count($arr);
	while($i>0){
		$i--;
		echo $arr[$i];
	}*/

	
	/*class Foo{
		function showName(){
			echo 'xiaoming';
		}
	}
	$f = new Foo();
	$f->showName();*/


?>