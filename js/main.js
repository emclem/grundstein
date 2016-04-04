jQuery(function($) {'use strict',

	
	// all Parallax Section
	$(window).load(function(){'use strict',
		$("#services").parallax("50%", 0.3);
		$("#clients").parallax("50%", 0.3);
	});
	

});


// Slider Height
var slideHeight = $(window).height();
$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);

$(window).resize(function(){'use strict',
	$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);
});