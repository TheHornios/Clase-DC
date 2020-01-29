$(function(){
    $('#main').prepend($('#slideshow'))
    $('#slideshow li').hide();
    $('#slideshow li').first().show();

    $('#slideshow').after($('<div class="numeritosYbotones">'));
    $('.numeritosYbotones').prepend($('<input class="move" id="siguiente" value="siguiente" type="button">'));
    $('.numeritosYbotones').prepend($('<input class="move" id="anteriror" value="anteriror" type="button">'));
    $('.numeritosYbotones').prepend($('<span>'));
    $('.numeritosYbotones span').html('1 de '+$('#slideshow li').length);

    $(".move").click(function(e){
        if(e.target.id=='anteriror'){
            anteriror();
        }else{
            siguiente();
        }
    });
    function anteriror(){
        if($('#slideshow li:visible').prev().html()!=undefined){
            $('#slideshow li:visible').fadeOut(200)
            var esta = $('#slideshow li:visible');
            setTimeout(function(){
                esta.hide();
                esta.prev().fadeIn();
                $('.numeritosYbotones span').html((esta.prev().index()+1)+' de '+$('#slideshow li').length);
            },100);
        }else{
            $('#slideshow li:visible').fadeOut(200)
            setTimeout(function(){
                $('#slideshow li:visible').hide();
                $('#slideshow li').last().fadeIn();
                $('.numeritosYbotones span').html('3 de '+($('#slideshow li').length));
            },100);
        }
    }
    function siguiente(){
        if($('#slideshow li:visible').next().html()!=undefined){
            $('#slideshow li:visible').fadeOut(200)
            var esta = $('#slideshow li:visible');
            setTimeout(function(){
                esta.hide();
                esta.next().fadeIn();
                $('.numeritosYbotones span').html((esta.next().index()+1)+' de '+$('#slideshow li').length);
            },100);
        }else{
            $('#slideshow li:visible').fadeOut(200)
            setTimeout(function(){
                $('#slideshow li:visible').hide();
                $('#slideshow li').first().fadeIn();
                $('.numeritosYbotones span').html('1 de '+($('#slideshow li').length));
            },100);
        }
    }
    intervaloPrincipal();
    function intervaloPrincipal(){
        setInterval(function(){
            siguiente();
        },4000)
    }
});