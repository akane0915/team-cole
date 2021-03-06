var navHeight = $('.navbar').height();
var drowDownMenuHeight = $('.drop-down-menu').height();
var screenWidth = screen.width;

$(document).foundation();

$(function() {

	/* !Nav Links */
	/*	----------------------------- */
	$('.scroll').click(function(e) {
		e.preventDefault();
		var goto = $(this).attr('href');
		if (screenWidth < 733) {
			$('html, body').animate({
				scrollTop: $(goto).offset().top - drowDownMenuHeight
			}, 500);
		} else {
			$('html, body').animate({
				scrollTop: $(goto).offset().top - navHeight
			}, 500);
		}
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

	// SLICK SLIDER FAMILY PHOTOS
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

	// SLICK SLIDER PAST EVENTS
	$('.past-events').slick( {
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// SLICK SLIDER UPCOMING EVENTS
	$('.event-slider').slick( {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

});
