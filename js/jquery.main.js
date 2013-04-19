$(document).ready(function(){


	$(document).ready(sizeContent);
	$(window).resize(sizeContent);

	function sizeContent() {

		$(".input, textarea, #outputframe").css({'width': $('.span6').width() - 10});
		//$(".tutorial-content").css({"height": $(window).height() - $(".footer-hack").height()});
		//$(".footer-hack").css({'min-height': $(window).height() - $(".heading").height() - 60});
		$(".content-scroller").css({'height': $(window).height() - $(".navbar").height() - $(".footer-container").height()- $(".heading-tutorial").height()})
	}


});
