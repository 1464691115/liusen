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

document.getElementById("navid").onclick(function () {

});
