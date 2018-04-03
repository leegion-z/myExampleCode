var chai = require('chai')
var assert = chai.assert;

describe('assert Demo', function () {
    it('use assert lib', function () {
        var value = "hello";
        assert.typeOf(value, 'string')
        assert.equal(value, 'hello')
        assert.lengthOf(value, 5)
    })
})


describe("测试kerwin的一个js文件",function(){

    context("1-关于限制方法的测试",function(){
        it("if send 0, expect 0",function(){
            //测试代码
            var result = limit(0);

            assert.equal(result,0);
        })

        it("if send 1, expect 1",function(){
            //测试代码
            var result = limit(1);
            assert.equal(result,1);
        })

        it("if send -2, expect 0",function(){
            var result = limit(-2);
            assert.equal(result,0);
        })
    })
})


function limit(num) {
    if (num < 0) {
        return 0;
    }
    return num;
};

