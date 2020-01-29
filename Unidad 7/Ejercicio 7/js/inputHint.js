$('form#search input[name=q]').val($('label').first().text());
	$('form#search input[name=q]').addClass('hint');
	$('form#search input[name=q]').data('pene',$('label').text())
	$('form#search label').remove()
	$('form#search input[name=q]').focus(function(){
		$(this).removeClass('hint')
		$(this).val('');
	});
	$('form#search input[name=q]').blur(function(){
		$(this).addClass('hint')
		if($(this).val()==''){
			$(this).val($(this).data('pene'));
		}
	})