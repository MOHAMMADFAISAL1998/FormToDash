$(".left i").click(function(){
    $(".sidebar").toggleClass("sidebar-hide");
    $(".dashboard-body").toggleClass("dashboard-move");
    $(".right").toggleClass("right-move");

})

$(".col-3 img").click(function(){
    $(".col-3 img").removeClass("bgcolor");
    $(this).addClass("bgcolor");
})