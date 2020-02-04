$("div #specials").find('form').after('<div id="informacion"></div>');

		$("#specials form").find('select').change(function(eve){
			var jqxhr = $.ajax( "./data/specials.json" )
			.done(paraAjax($(this).val()))
			
			function paraAjax(val){
				
				return function(e){
					$("#informacion").html('')
					for (let prop in e) {

						if(prop == val){

							for (let prop2 in e[prop]) {
								if(prop2 == 'title'){
									crearElemento("#informacion",'<h2>'+e[prop][prop2]+'</h2>');
								}
								if(prop2 == 'text'){
									crearElemento("#informacion",'<p>'+e[prop][prop2]+'</p>');
								}
								if(prop2 == 'image'){
									crearElemento("#informacion",'<img src="'+e[prop][prop2]+'"/>');
								}
								if(prop2 == 'color'){
									$('#informacion').css('color',e[prop][prop2])
								}
							}
						}
					}
				}
			}
		})
		function crearElemento(donde,typo){
			$(donde).append(typo)
		}
		$("#specials form").find('.buttons').remove();