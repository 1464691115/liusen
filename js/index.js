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
    });
})(jQuery);
        function weituo(e){
            var event=e||window.event;
            var target=event.target||event.srcElement;
            return target;
        }
        document.ready = function(){
            //事件委托
            // var ul = document.getElementById("navid");
            // ul.onclick=function(e){
            //     var target = weituo(e);
            //     target.style.backgroundColor="transparent";
            //     target.style.backgroundColor="#4593fd";
            // };
            var nav_li = document.getElementById("navid").getElementsByTagName("li");
            for(var i = 0;i<nav_li.length;i++){
                nav_li[i].onclick=function(){
                    for(var j = 0;j<nav_li.length;j++){
                        nav_li[j].className="";
                    }
                    this.className="active";
                }
            }
        }

