/*
AUTHOR: matthew ciampa
URL: http://www.matthewciampadesign.com/
*/
$(document).ready(function(){



	$(document).ready(sizeContent);
	$(window).resize(sizeContent);
	var colDivs = (".getting-started, .tutorial, .showcase, .drop");
	var tutDivs = (".frame, .output");
	for(var i = 1; i <= 100; i++) {
		$('.env').append('<div class="random-shape grav"></div>');
	}



	//update browser sizes
	function sizeContent() {
		var browserHeightF = $(window).height() - 62;
		var browserHeight = $(window).height() / 2 - 61;
		var browserWidth = $("body").innerWidth();
		var browserWidthThird = $(window).width() / 3;
		var homeColHalf = {'height' : browserHeight,'width' : browserWidthThird};
		var span4 = $(".circle").width();
		
		$(".box").css({'height' : browserHeight});
		
		//css
		$(tutDivs).css({'height' : browserHeight - 52,'margin-bottom' : 20});
		$('.tutorial-wrapper, .navbar-left-wrapper, .white-background').css({'height' : browserHeightF});
		$('.navbar-left').css({'height' : browserHeight});
		$('.cta').css({'padding-top' : browserHeight - $(".cta").height()});
		$(".links-inner").css({'padding-top' : $(colDivs).height() / 2 - $('h4').height() });
		$("#codeTextarea").css({'width': $(".frame-wrapper").width() - 40, 'height': $(".frame").height() - 50});
		$("#outputframe").css({'width': $(".frame-wrapper").width()- 30, 'height': $(".output").height() - 80});
	}
	
	
	

});
