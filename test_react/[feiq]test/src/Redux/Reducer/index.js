const reducer = (state="卖座电影11",action)=>{
	// state 参数 是咱们store 中存的 之前状态值， 不能去修改
	// console.log(action);

	let {type,payload} = action;

	switch(type){
		case "CHANGE_TITLE":
			return payload

		default:
			return state;
	}

	// return payload;
}


const reducer2 = (state=[],action)=>{

	let {type,payload} = action;

	switch(type){
		case "CHANGE_LIST":
			return [...state,...payload]

		default:
			return state;
	}

	return state;
}



/*

	reducer 必须是一个纯函数

	纯函数：const sum = function(value1, value2) { return value1 + value2 }*********************************
只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
不会改变原始输入参数，或是外部的环境，所以没有副作用
不依頼其他外部的状态，变量或常量
*********************************

非纯函数：
let count = 1；
let increaseAge = function(value) { return count += value }

// 不纯粹(impure)，splice会改变到原数组 const firstThree = function(arr) { return arr.splice(0,3) } 
// 纯粹(pure)，slice会返回新数组 const firstThree = function(arr) { return arr.slice(0,3) }


	var arr=[]
	function test(arr,action){
		
		return [...arr,action.payload]
	}

	test(arr)

*/

export  { reducer,reducer2 }