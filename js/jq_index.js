(function ($) {
    $(document).ready(function () {
        // $(".shopClass_show").hover(function(){
        //     $(".shopall").toggle();
        // });
        $(".shopClass_item").hover(function () {
            $(this).find("a").css("color", "#000");
            $(this).css("backgroundColor", "#fff");
            $(this).find(".shopall").show();
        }, function () {
            $(this).css("backgroundColor", "#4593FD");
            $(this).find("a").css("color", "#fff");
            $(this).find(".shopall").hide();
        });

        $(".shopClass").hover(function () {
            if (!$(".shopClass_show").is(":animated")) {
                $(".shopClass_show").stop().slideToggle("slow");
            }
        });

        //轮播图
        // $(".carouselBar").hover(function () {
        //     if(time_image){
        //         clearInterval(time_image);
        //     }
        // },function () {
        //     console.log(time_image);
        //     if(time_image){
        //         clearInterval(time_image);
        //     }
        //     setInterval(time_imgFun,2000);
        // })
        for(var i =0;i<$("#pagingid>li").length;i++){
            $("#pagingid>li")[i].innerHTML="<div id='f_id' class='f_cal'></div><div id='m_id'></div>";
        }
        $("#pagingid>li:first-child").children("div").first().addClass("f_calh");
        $("#pagingid>li:first-child").children("div").last().addClass("m_cal");
        //圆点切换||轮播图按键轮播
        var padingid=$("#pagingid>li"),
        zx_pagin = function (e) {
            padingid.children("#f_id").removeClass("f_calh");
            padingid.children("#m_id").removeClass("m_cal");
            e.children("#m_id").addClass("m_cal");
            e.children("#f_id").addClass("f_calh");
            return e.index();
        }
        $("#pagingid>li").hover(function(){
            var paginidex = zx_pagin($(this));
            $(".carouselUl>li").css({
                "z-index" : 0,
                "opacity" : 0
            });
            $(".carouselUl>li").eq(paginidex).css({
                "z-index" : 1,
                "opacity" : 1
            });
        });
        //定时图片切换
        // $(".carouselUl>li").first().css('z-index',1);
        console.log($(".carouselUl>li").eq(0).css('z-index'));
        var cale = $(".carouselUl>li").length,
        time_imgFun = function () {
            for(var i=0;i<cale;i++){
                if($(".carouselUl>li").eq(i).css('z-index')==1){
                    zx_pagin(padingid.eq(i+1));
                    $(".carouselUl>li").eq(i).css({
                        "z-index" : 0,
                        "opacity" : 0
                    });
                    if(i==cale-1){
                        $(".carouselUl>li").eq(0).css({
                            "z-index" : 1,
                            "opacity" : 1
                        });
                        zx_pagin(padingid.eq(0));
                        break;
                    }else{
                        $(".carouselUl>li").eq(i+1).css({
                            "z-index" : 1,
                            "opacity" : 1
                        });
                        break;
                    }
                }

            }
        }
        time_image = setInterval(time_imgFun,2500);
    });
})(jQuery);