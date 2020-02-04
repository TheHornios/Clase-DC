$('#blog h3').click(function(event){
    event.preventDefault();
    if(!$(this).next().is('div')){
        $(this).after('<div></div>');		
        $(this).next().load( "data/blog.html "+$(this).find("a").attr('href').substring($(this).find("a").attr('href').lastIndexOf("#")));
    }else{
        $(this).next().remove()
    }
});