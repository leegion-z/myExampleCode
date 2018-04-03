//mocha  --timeout 5000 设置超时时间

var chai = require('chai');
var expect = chai.expect;

describe("异步测试js文件",function(){

    it('异步请求应该返回一个对象', function(callback) {

        setTimeout(function(){
            var obj =test();
            expect(obj).to.be.an('object');

            callback();
        },1000)
    });
})


function test(){
	return {
		name:"kerwin"
	}
}