$(document).ready(function(){
    $("#actors .box:nth-child(3)").nextAll().hide();
    $("#actors button.more").click(function(){
      
        $show = $(this).hasClass("show");
        if(!$show){
            $("#actors .box:nth-child(3)").nextAll().fadeIn();
            $(this).addClass("show");
            $(this).text("닫기");
        }else{
            $("#actors .box:nth-child(3)").nextAll().fadeOut();
            $(this).removeClass("show");
            $(this).text("더보기");
   
        }
    });

    $(".button_part ul li").click(function(){

        var $index = $(this).index();
        $(".slide_part > ul").stop().animate({"margin-left":"-" + (100 * $index) + "%"},1000);
    
        $(".button_part ul li").removeClass("active");
        $(this).addClass("active")
    
    
    });
});