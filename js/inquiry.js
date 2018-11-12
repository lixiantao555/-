//默认排序
var i = 0;
function sort() {
   if(i++ % 2 == 0) {
       $("body").css("overflow", "hidden");
       $(".mask").css("display", "block");
       $(".area-mask").css("display", "none");
       $(".mask-check").css("display", "none");
       $(".screen").css("color", "#3be0d0");
       $(".price").css("color", "#333");
       $(".distance").css("color", "#333");
       $(".nav .down").css("background", "url(./image/down01.png) no-repeat center / .4rem");
   }else {
       $("body").css("overflow", "auto");
       $(".area-mask").css("display", "none");
       $(".mask-check").css("display", "none");
       $(".mask").css("display", "none");
       $(".screen").css("color", "#333");
       $(".price").css("color", "#333");
       $(".distance").css("color", "#333");
       $(".nav .down").css("background", "url(./image/down.png) no-repeat center / .4rem");
   }
}

//地区选择
var i = 0;
$(".down-area").on('click', function() {
    if(i++ % 2 == 0) {
        $("body").css("overflow", "hidden");
        $(".area-mask").css("display", "block");
        $(".mask").css("display", "none");
        $(".mask-check").css("display", "none");
        $(".screen").css("color", "#333");
        $(".price").css("color", "#333");
        $(".distance").css("color", "#3be0d0");
        $(".nav .down").css("background", "url(./image/down01.png) no-repeat center / .4rem");
    }else {
        $("body").css("overflow", "auto");
        $(".mask").css("display", "none");
        $(".area-mask").css("display", "none");
        $(".mask-check").css("display", "none");
        $(".screen").css("color", "#333");
        $(".price").css("color", "#333");
        $(".distance").css("color", "#333");
        $(".nav .down").css("background", "url(./image/down.png) no-repeat center / .4rem");
    }
});

//遍历城市列表
// $(".area-white .area-list").click(function(){
//     var item = $(this).index();  //获取索引下标 也从0开始
//     var textword = $(this).text();  //文本内容
// })
$(".area-white .area-list").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
})


//遍历默认排序,点击变色
$(".white .price-list").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
})

/////////////    点击遮罩消失    ///////////////////
$(".mask").click(function() {
    $(this).css("display", "none");
})

$(".area-mask").click(function(e) {
    e.stopPropagation();
    $(this).hide();
})

$(".mask-check").click(function() {
    $(this).hide();
})


/////////////////   筛选   ////////////////////////

var i = 0;
$(".down-choice").on('click', function() {
    if(i++ % 2 == 0) {
        $(".mask-check").css("display", "block");
        $(".mask").css("display", "none");
        $(".area-mask").css("display", "none");
        $(".price").css("color", "#3be0d0");
        $(".screen").css("color", "#333");
        $(".distance").css("color", "#333");
    }else {
        $(".mask-check").css("display", "none");
        $(".mask").css("display", "none");
        $(".area-mask").css("display", "none");
        $(".price").css("color", "#333");
        $(".screen").css("color", "#333");
        $(".distance").css("color", "#333");
    }
});

