$(function() {
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        data: [{1:'吃饭'}, {2:'睡觉'}, {3:'打豆豆'}],
        init: function(index) {
            if (index !== -1) {
                var _obj = this.data[index]
                var _key = Object.keys(_obj)
                var _val = _obj[_key]
                $('.btn1').html(_val);
                $('.btn1').attr('data-value',_key)
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            var _obj = this.data[index]
            var _key = Object.keys(_obj)
            var _val = _obj[_key]
            $('.btn1').html(_val);
            $('.btn1').attr('data-value',_key)
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn1').on('click', function() {
        hgS1.openSelectSwiper();
    });
    var hgS2 = new selectSwiper({
        el: '.select_box2',
        mustSelect: true,
        activeIndex: 0,
        data: [{1:'哈哈2'},{2:'呵呵2'},{3:'嘻嘻2'},{4:'嘿嘿2'},{5:'呼呼2'},{6:'咳咳2'},{7:'嘘嘘2'},],
        init: function(index) {
            if (index !== -1) {
                var _obj = this.data[index]
                var _key = Object.keys(_obj)
                var _val = _obj[_key]
                $('.btn2').html(_val);
                $('.btn2').attr('data-value',_key)
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
        },
        okFun: function(index) {
            var _obj = this.data[index]
            var _key = Object.keys(_obj)
            var _val = _obj[_key]
            $('.btn2').html(_val);
            $('.btn2').attr('data-value',_key)
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn2').on('click', function() {
        hgS2.openSelectSwiper();
    });
    var hgS3 = new selectSwiper({
        el: '.select_box3',
        mustSelect: true,
        activeIndex: 5,
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        init: function(index) {
            if (index !== -1) {
                $('.btn3').val(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            $('.btn3').val(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn3').on('click', function() {
        hgS3.openSelectSwiper();
    });
});
