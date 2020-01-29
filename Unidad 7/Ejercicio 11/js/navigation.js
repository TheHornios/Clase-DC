

$(function(){
    $('#nav>li').each(function(){
        $(this).hover(function(){
            $(this).find('ul').slideDown();
        },function(){
            $(this).find('ul').slideUp();
        });
    })
});