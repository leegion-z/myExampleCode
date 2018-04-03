function getCookie(name) {

	var cookie = document.cookie;
	// var cookie = 'user=cuijn; password=123456;  tel=13012345678; email=1@qq.com';
	
	//user=cuijn; password=123456;  email=1@qq.com; tel=111222
	// var arr = cookie.split('; ');
	// var key_value;
	// for(var i=0; i<arr.length; i++) {
	// 	key_value = arr[i].split('=');
	// 	// key_value[0]是name
	// 	// key_value[1]是value
	// 	if(key_value[0] === name) {
	// 		return key_value[1];
	// 	}
	// }

	// return null;
	// var cookieReg = /tel=([^;]*);?/;
	var cookieReg = new RegExp(name + '=([^;]*);?', 'img');
	if(cookieReg.test(cookie)) {
		return RegExp.$1;
	} else {
		return null;
	}
}

function setCookie(name, value, days, path) {
	var cookie = name + '=' + value;
	var expoires = new Date();
	expoires.setDate(expoires.getDate() + days);
	if(days) {
		cookie += ';expoires=' + expoires;
	}
	if(path) {
		cookie += ';path=' + path;
	}

	document.cookie = cookie;
}

function removeCookie(name, path) {
	setCookie(name, '', -1, path);
}