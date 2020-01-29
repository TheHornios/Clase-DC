$('div.module').hide()
		$('div.module').first().before('<ul class="ulNew"></ul>')
		$('#main div').each(function(){
			if($(this).find('h2').text()!=''){
				$('.ulNew').append("<li>"+$(this).find('h2').text()+"</li>")
			}
		})
		$('.ulNew li').each(function(){
			$(this).click(function(){
					$('.ulNew li').removeClass('current')
					$(this).addClass('current')
					ocultMostrarDiv($(this).text());
				}
			)
		})
		function ocultMostrarDiv(h2){
			$('#main div').each(function(){
				if(h2==$(this).find('h2').text()){
					$(this).show();
				}else{
					$(this).hide();
				}
			});
		}
		ocultMostrarDiv($('.ulNew li').first().text());