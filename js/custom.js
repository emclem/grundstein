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


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


});