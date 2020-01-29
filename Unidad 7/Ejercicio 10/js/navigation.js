

$(function(){
    $('#nav>li').each(function(){
        $(this).hover(function(){
            $(this).find('ul').slideDown();
            $('#nav>li').removeClass('selected');
            $(this).addClass('selected');
        },function(){
            $(this).find('ul').slideUp();
            $(this).removeClass('selected');
        });
    })
});