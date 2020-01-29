$('div#blog').find('li h3 a').click(function(event ){
    event.preventDefault();
    $('div#blog').find('li p:visible').each(function(){
        $(this).slideToggle(200);
    });
    setTimeout(mostar($(this)),200);
    function mostar(elemento){
        return function(){
            elemento.parent().parent().find("p").slideToggle(200)
        }
    }
})