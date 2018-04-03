/**
 * Created by Administrator on 2017/11/29.
 * copyright @phgap
 * company: qianfeng.com
 */

/**
 * 功能：对页面上的box，进行瀑布流的布局
 * 返回值：无
 * 参数：无
 */
function waterfall() {
    console.log('加载完成，准备布局');
    var $box = $('.box');
    var col = Math.floor($(window).width() / $box.innerWidth());    //TODO:需要计算
    var len = $box.length;
    var heightArr = [];
    var index;
    var left, top;
    for (var i = 0; i < len; i++) {
        if (i < col) {
            //第一行
            heightArr.push($box.eq(i).innerHeight());
        } else {
            //其他行
            // 1. 找到最矮列
            index = getMin(heightArr);
            // 2. 设定位置
            left = $box.eq(index).offset().left;
            top = heightArr[index];
            //$box.eq(i).css({
            //    position: 'absolute',
            //    left: left,
            //    top: top
            //})

            $box.eq(i).offset({
                left: left,
                top: top
            })
            // 3. 更新高度数组
            heightArr[index] += $box.eq(i).innerHeight();
        }
    }
}

function getMin(arr) {
    var index = 0;
    var len = arr.length;

    for (var i = 1; i < len; i++) {
        if (arr[i] < arr[index]) {
            index = i;
        }
    }

    return index;
}

function lazyLoad() {
    function needLoad() {
        var boxTop = $('.box:last-of-type').offset().top;
        var screenHeight = $(window).height();
        //TODO: jquery
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        return boxTop <= screenHeight + scrollTop;
    }

    $(window).on('scroll', function () {
        if (needLoad()) {
            loadData();
        }
    })
}

function loadData() {
    function createBox(src) {
        var str = $('#box-template').html();
        str = str.replace('{{src}}', src);
        $(str).appendTo('#container');
    }

    $.ajax({
        type: 'get',
        url: './imgs.json',
        success: function (resp) {
            //alert(resp);
            var len = resp.length;
            for (var i = 0; i < len; i++) {
                createBox(resp[i].src);
            }
            waterfall();
        },
        error: function (resp) {

        }
    })
}

//等待dom树建立完成以及js解析结束，并等待图片加载完成
$(window).on('load', function () {
    waterfall();
    lazyLoad();
})

//jquery的ready函数会等待dom树建立完成以及js解析结束，再开始调用ready的回调
//但是不会等待图片加载完成
//$(document).ready(function () {
//
//})
