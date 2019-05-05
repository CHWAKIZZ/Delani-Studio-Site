$(document).ready(function() {
    $('#portfolio span').addClass( "hide" );
    $('#portfolio .doings').hover(function() {
        /*fade in code*/
        $(this).find('span').removeClass('hide');
        $(this).find('.doings').addClass('imageEffect');
    }, function() {
        /*fade out code*/
        $(this).find('span').addClass('hide');
        $(this).find('.doings').removeClass('imageEffect');
    });

    $(".illustration1").click(function(){
        $(".illustration1").toggle(500);
        $(".details1").toggle(500);
    });
    $(".details1").click(function(){
        $(".details1").toggle(500);
        $(".illustration1").toggle(500);
    });
    $(".illustration2").click(function(){
        $(".illustration2").toggle(500);
        $(".details2").toggle(500);
    });
    $(".details2").click(function(){
        $(".details2").toggle(500);
        $(".illustration2").toggle(500);
    });
    $(".illustration3").click(function(){
        $(".illustration3").toggle(500);
        $(".details3").toggle(500);
    });
    $(".details3").click(function(){
        $(".details3").toggle(500);
        $(".illustration3").toggle(500);
    });
});