
jQuery(document).ready(function($)  {
	

	
	//$.getScript('modernizr.custom.98115.js');
	var hashed = " ";
	hashed = $(location).attr('hash'); 
	
	if (hashed.toLowerCase().indexOf("_a") >= 1) {
		hashed = hashed.replace('_a','');
		var posiy = $(''+hashed).scrollTop();
		$(window).scrollTop( posiy );
		//$('div#nav').append("<p class=info>POSI: " + posiy + "</p>" );
	}
	
	/* Slider einfliegen lassen */
	
	
	
	factor = $(window).height() / 800;
	y = 10;
	
	yoffset = ( ($(window).height() / 2) + y )* factor ;
	xoffset = ($(window).width() -40);
	
	function offsetFix () {
		if (xoffset < 960) {
		$('.team-item p').css({"width": xoffset});
		$('#slider p').css({"width": xoffset});
		} else {
			$('.team-item p').css({"width": "auto"});
			$('#slider p').css({"width": "auto"});
		}
	}
	
	offsetFix();
	$(window).resize( function() {
		xoffset = ($(window).width() -40);
		$('div#slider').css({"left": "0px", "opacity": "1", "top": yoffset});
		offsetFix();
	} );
	
	$('div#slider').css({"left": "-300px", "opacity": "0", "top": yoffset});
	                                                                         
	$('div#slider').animate({
		opacity: 1
	},{duration: 1150, queue: false});
	$('div#slider').animate({
		left : "0px"
	}, { duration: 850, queue: false});
 
	/* Shortcodes 
	 Hier müsste man noch unterscheiden zwischen den einzelnen, weil sonst die Animationen nicht immer ausgeführt werden
	 * */
	$('div.sc-item img').css({"opacity" : "0"});
	
	$('div.sc-item a').hover(
		function() {
		$('div.sc-item img').stop().animate({'opacity': '0.9'}); },
		function() {		
		$('div.sc-item img').stop().animate({'opacity': '0'}); }
		
	);
	
	/* Search Box Animation */
	
	var name = '.searchbox-sword';
	var focused = false;
	
  	$('input.searchbox-sword').blur(function(){
    		$('input').removeClass("focus");
    		$(name).stop().delay(1000).animate({'opacity':'0'});
    		focused = false;
    	})
            .focus(function() {		
    	    $(this).addClass("focus");
    	    focused = true;
    	});
	
	$(name).css( {"opacity":"0"} );
	
	$('div#search').hover(
		function() {
		$(name).stop().animate({'opacity':'1'}); },
		function() {
			if (focused == false) {
				$(name).stop().delay(1000).animate({'opacity':'0'});
			}	
		}
	);
	

	
	
	/** Navi Burger Menu animation
	 * 
	 */
	function liAnimateOn () {
		$('li.navitem a').css({'visibility': 'visible'});
    	$('li.navitem a').animate({'height': '20px'});
	}
	
	function liAnimateOff () {
		
    	$('li.navitem a').animate({'height': '0em'});
    	$('li.navitem a').css({'visibility': 'hidden'});
	}
	
	function hoverNavi () {
		if ($(window).width() < 750) {
			$('ul#mainnavi li a').css({'height': '0em'});		
			$('div#nav').hover(liAnimateOn, liAnimateOff);
		}
	}
	
	
	hoverNavi();
	$(window).resize(hoverNavi);
	$('div#nav').addClass('scripts');
	

	// Iphone Ipad Funktionen

/*	$('div#nav < nav').on("click", function(e) {
    	e.preventDefault();
    	liAnimateOn();
	});
	
	$('div#nav < nav').on("tap", function() {
    	liAnimateOn();
	}); */
	
	
	
	$(window).on("scroll", liAnimateOff);

	/** Anchor Fix FF
	 * 
	 */
	
	     
	
/** LAST
 *
 * ALWAYS 
 */
	
	
	if ( Modernizr.bgsizecover ) {
		$.stellar();
	}	
$('div#nav').append("<p>STELLAR FUNKTIONIERT: " + $(location).attr('hash') + "</p>" );

});
