$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.header-top').toggleClass('header-top-scrolled', $(this).scrollTop() > 50);
		$('.header-main').toggleClass('header-main-scrolled', $(this).scrollTop() > 50);
	});


	// RESPONSIVE MENU
	$('.responsive-burger-button').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});


	// SLIDER HEIGHT
	var slideHeight = $(window).height();
	$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);
	$(window).resize(function(){'use strict',
		$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);
	});


	// BANNER HEIGHT
	var bannerHeight = $(window).height()/1.75;
	$('#banner .banner-item').css('height',bannerHeight);
	$(window).resize(function(){'use strict',
		$('#banner .banner-item').css('height',bannerHeight);
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


	// PRETTY PHOTO
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	


});