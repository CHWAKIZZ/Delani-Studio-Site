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

});