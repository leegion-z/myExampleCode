/**
 * Created by Administrator on 2017/11/28.
 */

(function($){
    $.fn.extend({
        randomColor: function () {
            function random() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);

                return 'rgb(' + r + ',' + g + ',' + b + ')';
            }

            //this指向jquery对象
            for (var i = 0; i < this.length; i++) {
                this[i].style.background = random();
            }

            return this;
        }
    })
})(jQuery)

//1. 立即执行函数避免命名冲突
//2. 使用$.fn.extend()追加扩展
//3. 在追加的扩展函数中，要遍历this(jQuery对象)里面的每一个元素
//4. 函数内，return this
