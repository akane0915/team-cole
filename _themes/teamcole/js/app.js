var navHeight = $('.navbar').height();

$(document).foundation();

$(function() {
	
	/* !Nav Links */
	/*	----------------------------- */
	$('.top-bar a').click(function(e) {
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
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	});
	
	$('.fam-photos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
// 		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
});


