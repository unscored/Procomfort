jQuery.extend(verge);
	var desktop = true,
		tablet = false,
		tabletPortrait = false,
		mobile = false;

	$(window).resize(function () {
		if ($.viewportW() >= 1025) {
			desktop = true;
			tablet = false;
			tabletPortrait = false;
			mobile = false;
		}
		if ($.viewportW() >= 900 && $.viewportW() <= 1024) {
			desktop = false;
			tablet = true;
			tabletPortrait = false;
			mobile = false;
		}
		if ($.viewportW() >= 768 && $.viewportW() <= 899) {
			desktop = false;
			tablet = false;
			tabletPortrait = true;
			mobile = false;
		} else {
			if ($.viewportW() <= 767) {
				desktop = false;
				tablet = false;
				tabletPortrait = false;
				mobile = true;
			}
		}
	}).resize();

$(document).ready(function(){
/**********************MAIN CAROUSEL**********************************/

	$('.main-carousel').slick({
		autoplay: false,
		arrows: false,
		dots: true,
	});

	$('.carousel__w .prev-button').on('click', function(e) {
		e.preventDefault();
		$('.main-carousel').slick('slickPrev');
	});

	$('.carousel__w .next-button').on('click', function(e) {
		e.preventDefault();
		$('.main-carousel').slick('slickNext');
	});

/***************************MEDIA CAROUSEL*******************************/

	$('.media-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		infinite: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				autoplay: false,
				infinite: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: false,
				infinite: true,
			}
		}
		]
	});
	$('.media-carousel__w .prev-button').on('click', function(e) {
		e.preventDefault();
		$('.media-carousel').slick('slickPrev');
	});

	$('.media-carousel__w .next-button').on('click', function(e) {
		e.preventDefault();
		$('.media-carousel').slick('slickNext');
	});

/**********************CERTIFICATE-CAROUSEL******************************/
	
	$('.certificates-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		infinite: true,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				autoplay: false,
				infinite: true,
				variableWidth: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: false,
				infinite: true,
				variableWidth: false,
			}
		}
		]
	});
	$('.certificates-carousel__w .prev-button').on('click', function(e) {
		e.preventDefault();
		$('.certificates-carousel').slick('slickPrev');
	});

	$('.certificates-carousel__w .next-button').on('click', function(e) {
		e.preventDefault();
		$('.certificates-carousel').slick('slickNext');
	});
/**********************PRODUCT-SALE-CAROUSEL******************************/
	$('.product-sale-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		autoplay: false,
		infinite: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				autoplay: false,
				infinite: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: false,
				infinite: true,
			}
		}
		]
	});
	$('.product-sale-carousel__w .prev-button').on('click', function(e) {
		e.preventDefault();
		$('.product-sale-carousel').slick('slickPrev');
	});

	$('.product-sale-carousel__w .next-button').on('click', function(e) {
		e.preventDefault();
		$('.product-sale-carousel').slick('slickNext');
	});

/************************SELECT2**************************************/
	$('.select-item__w select').select2({
		theme: "classic",
		minimumResultsForSearch: -1
	});
/**************************CALCULATOR OPEN*****************************/
	var $calculator = $('.calculator__w');
	if (!mobile) {
		console.log('not mobile');
		$('.calculator-m').on('click', function(e) {
			e.preventDefault();

			$(this).addClass('show');
			$calculator.addClass('show').fadeIn();

		});
		$(document).on('click', function(event) {
			event.preventDefault();
			if ($(event.target).closest('.calculator__w').length == 0 && $(event.target).closest('.calculator-m').length == 0) {
	            $calculator.removeClass('show').fadeOut(200, function(){
	            	$('.calculator-m').removeClass('show');
	            });
	        }
		});	
	}

	
/*******************************CALLBACK**********************************/
	$('.callback-content').hide();
	$('.open-callback').on('click', function(e){
		e.preventDefault();
		$('.callback-content').slideDown();
	});
	$('.close-callback').on('click', function(e){
		e.preventDefault();
		$('.callback-content').slideUp();
	});

/**********************************TABS***********************************/

	var li = $('.tabs-controls ul li'),
		tabs = $('.tabs-content__item');

	li.removeClass('active');
	li.eq(0).addClass('active');	
	tabs.fadeOut();	
	tabs.eq(0).fadeIn(function(){
		$(this).find('.product-carousel').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			autoplay: false,
			infinite: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					autoplay: false,
					infinite: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: false,
					infinite: true,
				}
			}
			]
		});
		$(this).find('.product-carousel__w .prev-button').on('click', function(e) {
			e.preventDefault();
			$(this).siblings('.product-carousel').slick('slickPrev');
		});

		$(this).find('.product-carousel__w .next-button').on('click', function(e) {
			e.preventDefault();
			$(this).siblings('.product-carousel').slick('slickNext');
		});
	});



	li.on('click', function(e) {
		e.preventDefault();
		li.removeClass('active');
		$(this).addClass('active');

		var index = $(this).index();
	
		tabs.fadeOut(100);
		tabs.eq(index).fadeIn(100, function(){
			if ($(this).find('.slick-initialized').length == 0) {

				$(this).find('.product-carousel').slick({
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
					autoplay: false,
					infinite: true,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: false,
							autoplay: false,
							infinite: true,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							autoplay: false,
							infinite: true,
						}
					}
					]
				});
				$(this).find('.product-carousel__w .prev-button').on('click', function(e) {
					e.preventDefault();
					$(this).siblings('.product-carousel').slick('slickPrev');
				});

				$(this).find('.product-carousel__w .next-button').on('click', function(e) {
					e.preventDefault();
					$(this).siblings('.product-carousel').slick('slickNext');
				});

			} else {
				$(this).find('.slick-initialized').slick('reinit');
			}
		});
	});

/*********************************************TABS MOBILE************************************/

	var tabControl = $('a.tab-control');
	tabControl.removeClass('active');
	tabControl.eq(0).addClass('active').siblings().removeClass('active');	



	tabControl.on('click', function(e) {
		e.preventDefault();
		tabControl.removeClass('active');
		$(this).addClass('active');

		tabs.slideUp(300);
		$(this).next().slideDown(300, function(){
			if ($(this).find('.slick-initialized').length == 0) {

				$(this).find('.product-carousel').slick({
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
					autoplay: false,
					infinite: true,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: false,
							autoplay: false,
							infinite: true,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							autoplay: false,
							infinite: true,
						}
					}
					]
				});
				$(this).find('.product-carousel__w .prev-button').on('click', function(e) {
					e.preventDefault();
					$(this).siblings('.product-carousel').slick('slickPrev');
				});

				$(this).find('.product-carousel__w .next-button').on('click', function(e) {
					e.preventDefault();
					$(this).siblings('.product-carousel').slick('slickNext');
				});

			} else {
				$(this).find('.slick-initialized').slick('reinit');
			}
		});
	});

/*************************************OPEN TABLET MENU**************************************/

	var nav = $('.header-bottom nav ul.menu');
		$('.btn_tablet-menu').on('click', function(e){
			e.preventDefault();
			
			nav.slideDown();
			
		$(document).on('click', function(event) {
				event.preventDefault();
		        if ($(event.target).closest('.header-bottom nav').length == 0 && $(event.target).closest('.btn_tablet-menu').length == 0) {
		        	if (tabletPortrait) {
		            	nav.slideUp();
		            }
		            $(window).resize(function() {
						if (tabletPortrait) {
					    	nav.slideUp();
				        }
					});
		        }
		    });
		});
		

	$(window).resize(function() {
		if(!tabletPortrait) {
			nav.removeAttr('style');
		}
	});
		
	
/*************************************OPEN CATALOG TABLET**************************************/
	if (!desktop) {
		$('.catalog__w').on('click', function(e){

			e.preventDefault();
			
			$(this).addClass('active');
			$('.inner-menu').slideDown();

			$(document).on('click', function(event) {
				event.preventDefault();
		        if ($(event.target).closest('.catalog__w').length == 0 && $(event.target).closest('.inner-menu').length == 0) {
		            $('.inner-menu').slideUp(300, function(){
		            	$('.catalog__w').removeClass('active');
		            });
		        }
			});	
		});
	}

	$(window).resize(function() {
		if (!desktop) {
			$('.catalog__w').on('click', function(e){
				e.preventDefault();
				
				$(this).addClass('active');
				$('.inner-menu').slideDown();

				$(document).on('click', function(event) {
					event.preventDefault();
			        if ($(event.target).closest('.catalog__w').length == 0 && $(event.target).closest('.inner-menu').length == 0) {
			            $('.inner-menu').slideUp(600, function(){
			            	$('.catalog__w').removeClass('active');
			            });
			        }
				});	
			});
		}
	});
	

/*************************************OPEN MOBILE SEARCH**************************************/

	$('.mobile-search').on('touchstart', function () {
		if ($('body').hasClass('open-mobile-searh')) {
			$('body').removeClass('open-mobile-searh');
		} else {
			$('body').addClass('open-mobile-searh');
		}
		
		if ($('body').hasClass('open-mobile-menu')) {
			$('body').removeClass('open-mobile-menu');
		} 
	});

/*************************************OPEN MOBILE MENU**************************************/

	$('.mobile-menu').on('touchstart', function () {
		if ($('body').hasClass('open-mobile-menu')) {
			$('body').removeClass('open-mobile-menu');
			$(this).find('i').removeClass('icon_close-menu-button').addClass('icon_mobile-menu');
		} else {
			$('body').addClass('open-mobile-menu');
			$(this).find('i').removeClass('icon_mobile-menu').addClass('icon_close-menu-button');
		}
		if ($('body').hasClass('open-mobile-searh')) {
			$('body').removeClass('open-mobile-searh');
		}
	});

/***********************************FANCYBOX******************************************************/

	$('.fancybox').fancybox({
        maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
    });

    $('.thanks').fancybox({
    	openEffect  : 'none',
        closeEffect : 'none',
        maxWidth	: 400,
		maxHeight	: 60,
    })
});
