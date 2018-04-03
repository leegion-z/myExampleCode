function getStyle(el, style) {
    //取得某个元素的某个样式
    //外部或内联的
    //getComputedStyle取得某个元素的所有样式
    //这个函数返回一个对象，对象中包含了若干个属性，每个属性，对应着一个样式
    if (window.getComputedStyle) {
        //非IE8
        return window.getComputedStyle(el)[style];
    } else {
        //IE8
        return el.currentStyle[style]
    }
}

function animate(el, properties, fn) {
    //防止连续调用animate所导致的运动速度越来越快
    clearInterval(el.timer);
    // el.style.left = target + 'px';
    el.timer = setInterval(function () {

        //offsetXXX赋值给style.xxx有问题，
        //我们就需要取得style的xxx，赋值给style的xxx
        //但是，yyy.style.xxx是行内样式，在没有行内样式时，取得的内容为""
        //所以，我们需要能够取到某个元素上优先级最高的css样式
        // var current = el.offsetLeft;
        var target, current;
        var isAllDone = true;

        for (var property in properties) {
            if (property === 'opacity') {
                current = Math.round(parseFloat(getStyle(el, property)) * 100);
            } else {
                current = parseInt(getStyle(el, property));
            }

            target = properties[property];
            var speed = (target - current) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (speed !== 0) {
                isAllDone = false;
            }

            if (property === 'opacity') {
                el.style[property] = (current + speed) / 100;
            } else {
                el.style[property] = current + speed + 'px';
            }
        }

        if (isAllDone) {
            clearInterval(el.timer);
            //动画结束
            if (typeof fn === 'function') {
                fn();
            }
        }

    }, 20)
}