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
        $(".carouselBar").hover(function () {
            if(time_image){
                clearInterval(time_image);
            }
        },function () {
            console.log(time_image);
            if(time_image){
                clearInterval(time_image);
            }
            setInterval(time_imgFun,2000);
        })
        for(var i =0;i<$("#pagingid>li").length;i++){
            $("#pagingid>li")[i].innerHTML="<div id='f_id' class='f_cal'></div><div id='m_id'></div>";
        }
        $("#pagingid>li:first-child").children("div").first().addClass("f_calh");
        $("#pagingid>li:first-child").children("div").last().addClass("m_cal");
        //圆点切换||轮播图按键轮播
        var zx_pagin = function (e) {
            $("#pagingid>li").children("#f_id").removeClass("f_calh");
            $("#pagingid>li").children("#m_id").removeClass("m_cal");
            $(e).children("#m_id").addClass("m_cal");
            $(e).children("#f_id").addClass("f_calh");
            
        }
        $("#pagingid>li").hover(function(){
            zx_pagin(this);
        });
        //定时图片切换
        $(".carouselUl>li").hide();
        $(".carouselUl>li").first().show();
        var time_Sum = 1,
        time_imgFun = function () {
            for(var i=0;i<$(".carouselUl>li").length;i++){
                $(".carouselUl>li").eq(i).fadeOut("fast",function () {
                    if(i==5){
                        $(".carouselUl>li").eq(time_Sum).fadeIn("fast",function () {
                            if(time_Sum===5){
                                time_Sum = 0;
                            }
                            zx_pagin($("#pagingid>li").eq(time_Sum-1));
                        });
                        time_Sum++;
                    }

                });
            }
        },
        time_image = setInterval(time_imgFun,2000);
    });
})(jQuery);