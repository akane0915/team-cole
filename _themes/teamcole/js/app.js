var navHeight = $('.navbar').height();

$(document).foundation();

$(function() {
	
	/* !Nav Links */
	/*	----------------------------- */
	$('.navbar-nav a').click(function(e) {
		e.preventDefault();
		var goto = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(goto).offset().top - navHeight
		}, 500);
	});
	
	/* !Parallax Banner */
	/*	----------------------------- */
	$('#scene').parallax();
	
	/* !Lightbox */
	/*	----------------------------- */
	$('.thumbs').each(function() { 
		$(this).magnificPopup({ 
			delegate: 'a',
			type: 'image',
			preloader: true,
			mainClass: 'mfp-fade',
			image: {
				markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<div class="mfp-img"></div>'+
					'<div class="mfp-bottom-bar">'+
						'<div class="mfp-title"></div>'+
						'<div class="mfp-counter"></div>'+
					'</div>'+
				'</div>',
				verticalFit: true
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	});

	
});


