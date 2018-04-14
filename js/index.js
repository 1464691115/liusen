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
            //计算轮播图分页按钮
            var paging = document.getElementById("pagingid"),
                paging_li = paging.getElementsByTagName("li"),
                paging_m= paging_li.childNodes;
            console.log(paging_m);
            // var left_paging = paging.getElementsByTagName("li")[1].currentStyle.innerWidth;
            // console.log(paging.getElementsByTagName("li")[1].lenght);
            // pading.style.left=left_paging;
            for(var i=0;i<paging_li.length;i++){
                // var m=null,f=null;
                // if(i===0){
                //     m = "m_cal",
                //     f = "f_calh";
                // }
                // paging_li[i].innerHTML="<div id='f_id' class='f_cal "+f+"'></div><div class='cal "+m+"' id='m_id'></div>";
                paging_li[i].innerHTML="<div id='f_id' class='f_cal'></div><div class='cal' id='m_id'></div>";
                paging_li[i].onmousemove=function () {
                    this.childNodes[1].className="m_cal";/*border-color: transparent;*/
                    this.childNodes[0].className="f_cal f_calh";
                    // paging_li[i].getElementsByClassName("cal")[0].classList.add("m_cal");
                }
                paging_li[i].onmouseout=function () {
                    // paging_li[i].getElementsByClassName("cal")[0].classList.remove("m_cal");
                    this.childNodes[1].className="cal";
                    this.childNodes[0].className="f_cal";
                }
            }
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

