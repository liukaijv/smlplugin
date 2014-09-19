// handle image loading errors with jquery
function imgError(placeImg){
	if(!placeImg)return false;
	$('img').one('error',function(){			
		$(this).attr('src',placeImg);			
	})
	if ($.browser.msie && $.browser.version < 10 ){			
		$('img').each(function(){
		     $(this).attr('src', $(this).attr('src'));
		});
	}
}	
// imgError('loading.gif');