// A small plugin to deal width responsive image delivery depending screen width.
;(function(&){

	$.fn.dataImg = function (options) {

		var settings = $.extend({
			sml : 400,
			med : 800,
			lrg : 1000,
			resize : false
		}, options);

		var elements = $(this);

		function getSrc (element) {
			var screenWidth = $(window).width();
			if(screenWidth > settings.med){
				return element.data('lrg');
			}else if(screenWidth < settings.med && screenWidth > settings.sml){
				return element.data('med');
			}else{
				return element.data('sml');
			}
		}

		function breakpoints () {
			elements.each(function(){
				var _this = $(this);
				var src = getSrc(_this);
				if(src != undefined) {
					if(_this.is('img')){
						_this.attr('src',src);
					}else{
						_this.css('background-image', 'url('+ src +')');
					}
				}
			});
		}

		breakpoints();

		if(settings.resize == true) {
			$('window').resize(function(){
				breakpoints();
			});
		}
	}

})(jQuery)