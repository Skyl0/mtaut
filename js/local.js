
jQuery(document).ready(function($)  {
	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		var is_safari = navigator.userAgent.indexOf("Safari") > -1;	
	};
	var is_chrome = window.chrome;
	
	var name = '.searchbox-sword';
	var shadow = '.sb_shadow';
	
	$(name).css( {"opacity":"0"} );
	$(shadow).css( {"opacity":"0"} );

	/* 
	 * Slider einfliegen lassen 
	 * 
	 */
	
	factor = $(window).height() / 800;
	y = 10;
	
	yoffset = ( ($(window).height() / 2) + y )* factor ;
	xoffset = ($(window).width() -40);
	
	function offsetFix () {
		if (xoffset < 960) {
		$('.team-item p').css({"width": xoffset});
		$('#slider p').css({"width": xoffset});
		} else {
			//$('.team-item p').css({"width": "auto"});
			$('#slider p').css({"width": "auto"});
		}
	}
	
	offsetFix();
	if ( Modernizr.bgsizecover && $(window).width() >= 480) {
		$(window).resize( function() {
			xoffset = ($(window).width() -40);
			$('div#slider').css({"left": "50%", "opacity": "1", "top": yoffset, "margin-left": "-497px"});
			offsetFix();
		} );
		function slideIn() {
			factor = $(window).height() / 800;
			yoffset = ( ($(window).height() / 2) + y )* factor ;
				$('div#slider').css({"left": "0%", "opacity": "0", "top": yoffset, "margin-left": "-497px"});
	    	                                                                     
				$('div#slider').animate({
					opacity: 1
				},{duration: 1150, queue: false});
				$('div#slider').animate({
					left : "50%"
				}, { duration: 850, queue: false});
		}
		slideIn();
		$( window ).resize(function() {
			slideIn();
		});
	} else {
		function slideInMobile() {
			factor = $(window).height() / 400;
			yoffset = ( ($(window).height() / 2) + y )* factor ;
			$('div#slider').css({"left": "-50%", "opacity": "0", "top": "200px"});
																					 
			$('div#slider').animate({
				opacity: 1
			},{duration: 1150, queue: false});
			$('div#slider').animate({
				left : "0%"
			}, { duration: 850, queue: false});
		}
		slideInMobile();
		$( window ).resize(function() {
			slideInMobile();
		});
		
	}
	
	
	//shortcodes_off = $('#shortcodes').offset().top;
	//$('#shortcodes').attr("data-stellar-vertical-offset", -1 * shortcodes_off / 5 );

 
	/* 
	 * 
	 * Shortcodes 
	 * 
	 */
	
	$('div.sc-item img').css({"opacity" : "0"});
	
	$('div.sc-item a').hover(
		function() {
		$('div.sc-item img').stop().animate({'opacity': '0.9'}); },
		function() {		
		$('div.sc-item img').stop().animate({'opacity': '0'}); }
		
	);
	
	/* 
	 * Search Box Animation
	 *  
	 */
	
	
	// Focus
	
	sb_off();
	
	$('.searchbox-button').hover( 
		function() {
			$('.searchbox-button').attr('src','/fileadmin/mtauto/images/suche_hover.png');
			sb_on();
	},
		function() {
			$('.searchbox-button').attr('src','/fileadmin/mtauto/images/suche_button.png');
			setTimeout(sb_off,1500);
	});	
	
  	$(name).blur(function(){
  			$(name).removeClass('focus');
  			setTimeout(sb_off,1500);
    });
    
    $(name).focus(function() {		
    	    $(name).addClass('focus');
    });
    
    $(name).click(sb_on);
	

	function sb_off () {		
		if (!( $(name).hasClass('focus') ) ) {
			// dialog("Kein Fokus, deaktiviere!");
			$(name).stop().animate({'opacity':'0'});
		    $(shadow).stop().animate({'opacity':'0'});
		}
	}
	
	function sb_on () {
		$(name).stop().animate({'opacity':'1'});
		$(shadow).stop().animate({'opacity':'1'});		
	}

	
	/*
	 * Navi Burger Menu animation
	 * 
	 */
	//var isiton = false; 	
	$('#burger').on('tap click', function(){
		$('#mainnavi').slideToggle('slow');
		$(this).toggleClass('fired');
	});
	
	
	
	
	$('#header').css({'height':$(window).height()}); // vh fix (safari < 9 z.B.)
  
  
  	$(function() {
  	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
  
});


$(window).load(function() {    
var is_safari = navigator.userAgent.indexOf("Safari") > -1;	
var is_chrome = window.chrome;

var slider = $('#slider-imgs .csc-textpic-imagewrap').bxSlider({
  		auto: true,
  		autoControls: false,
		mode:'fade',
		captions: false,
		pager: false,
		controls: true,
		pause:5000,
		autoHover: false,
		preloadImages: 'all',
		//useCSS: false,
		//adaptiveHeight: true,
		//slideWidth: $(this).width(),
		
		onSlideAfter: function() {
			$bg = $(".fitimage");
			//resizeBg();
		},
		onSliderLoad: function() {
			/* CENTER IMAGE IF IMG IS SCALED BY HEIGHT - START */
			$("#slider-imgs .csc-textpic-imagewrap img").each(function(index, element) {
				//element = $(this).width();
				//$('#preload').text(index);
				curimg = $(this).width();
			});
			
			var theWindow        = $(window),			
	   			$bg              = $("#slider-imgs .csc-textpic-imagewrap img"),
	    		aspectRatio      = $bg.width() / $bg.height();	
    			
				    		
				function resizeBg() {
					
					
					if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
						overflow = theWindow.width() / 2;
						overflowimg = $bg.width() / 2;
						//liwidth = $bg.parent('li').width();
						//newliwidth = liwidth + overflow ;
						$bg
							.removeClass('bgwidth')
							.addClass('bgheight')
							.css('margin-left',(overflow - overflowimg));
							//.parent('li').width(newliwidth);
					} else {
						$bg
							.removeClass('bgheight')
							.addClass('bgwidth')
							.css('margin-left','0');
					}			
				}                			
				theWindow.resize(resizeBg).trigger("resize");
				$( window ).resize(function() {
					resizeBg();
					slider.goToSlide(0);
					//slider.reloadSlider();
					//$('#slider-imgs').load(document.URL + '#slider-imgs'); ERRORS
				});
				resizeBg();
				//slider.reloadSlider();
				//$('#slider-imgs').load(document.URL +  ' #slider-imgs');
				
				if ( Modernizr.bgsizecover && $(window).width() >= 480 && !is_safari) {
					$.stellar();
				} else {
					
				}
			/* CENTER IMAGE IF IMG IS SCALED BY HEIGHT - END */
		}
	});
	

				
	/*
	 * Stellar mit Modernizr Abfrage (Background-size: cover)
	 * 
	 */	
/*
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;


	if ( Modernizr.bgsizecover && $(window).width() >= 480 && !is_safari) {
		$.stellar();
	} else {
		// TODO
	
	}	*/
	if ( Modernizr.bgsizecover && $(window).width() >= 480 && !is_safari) {
		$.stellar();
	} else {
	}
	$('#fahrzeugframe').load(function () {
	    $('#iframeloader').fadeOut('fast');
	});
	// IFRAME Loading after Rest
	
	//$(document).ready (function(){
		$('iframe#fahrzeugframe').attr('src','http://www.webmobil24.com/web/de/haendler_homepages/mt-autoboerse/liste.htm?nomenu=1');
	//)};
	
	
	// #preloader deactivate after Page load
	$('#preloader').delay(200).fadeOut('slow');
	
	
	
	
});