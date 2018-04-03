function move(elem , targets , time , cbFn){
	var startTime = now();
	var objB = {};
	var objC = {};
	var d = time;
	for(var attr in targets){
		var b = parseInt(css(elem,attr)); 
		if(attr == 'opacity'){
			b = b == undefined ? 1 : b;
		}
		else{
			b = b || 0;
		}
		objB[attr] = b;
		objC[attr] = targets[attr] - b;
	}
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var changeTime = now();
		var t = Math.min(changeTime - startTime , d);  // 0~2000 
		if(t == d){
			clearInterval(elem.timer);
			if(cbFn){
				cbFn.call(elem);
			}
		}
		for(var attr in targets){
			var value = t/d * objC[attr] + objB[attr];
			elem.style[attr] = value + (attr == 'opacity' ? '' : 'px');
		}	
	},16);
}

function now(){
	return (new Date()).getTime();
}

function css(elem,attr){
	if(elem.currentStyle){
		return elem.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(elem)[attr];
	}
}