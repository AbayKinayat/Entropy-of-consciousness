
// Запуск слайдера owl-carousel
$(document).ready(function(){
	$(".section-three__row").owlCarousel({
		margin: 10,
		
		responsive:{ //Адаптивность
			0:{
				items:1,
				loop: true,
				autoplay: true,
				autoplayHoverPause: true,
			},
			780:{
				items:2,
			},
			1200:{
				items:3
			},
			1920:{
				items:3
			}
		}
	});
  });

  $(document).ready(function(){
	$(".section-six__slider").owlCarousel({
		responsive:{ //Адаптивность
			0:{
				items:1
			},
			1200:{
				items:2
			}
		}
	});
  });

// Анимация Нав Якорь для header

$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	});
	$("#footer-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	});
});

 
// Аккардион Вопрос/Ответ
$('.section-four__question-box').click(function(){
    $(this).toggleClass('in').next().slideToggle();
	$('.section-four__question-box').not(this).removeClass('in').next().slideUp();
	$(this).children('.accardion-arrow').children('.accardion-arrow-lefthalf').toggleClass('accardion-arrow-lefthalf_active');
	$(this).children('.accardion-arrow').children('.accardion-arrow-righthalf').toggleClass('accardion-arrow-righthalf_active');
	$('.accardion-arrow-lefthalf').not($(this).children('.accardion-arrow').children('.accardion-arrow-lefthalf')).removeClass('accardion-arrow-lefthalf_active');
	$('.accardion-arrow-righthalf').not($(this).children('.accardion-arrow').children('.accardion-arrow-righthalf')).removeClass('accardion-arrow-righthalf_active');
});

         // Аккардион Вопрос/Ответ в popup
$('.popup__question-box').click(function(){
	$(this).toggleClass('in').next().slideToggle();
	$('.popup__question-box').not(this).removeClass('in').next().slideUp();
	
	$(this).children('.popup__question-close').toggleClass('popup__question-close_active');
	$('.popup__question-close').not($(this).children('.popup__question-close')).removeClass('popup__question-close_active');
});

        // Модальное окно при нажатии на block подробнее
        
$(document).ready(function($) {
    $('.block-popup__open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
    });	

    $('.fear-popup__open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
    });

    $('.traum-popup__open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});

	$('.form-popup__open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
    });
    
    $('.block-popup__open').click(function() {
		$('.popup').slideToggle();
    });
    
    $('.fear-popup__open').click(function() {
		$('.fear-popup').slideToggle();
    });
    
    $('.traum-popup__open').click(function() {
		$('.traum-popup').slideToggle();
	});

	$('.form-popup__open').click(function() {
		$('.form-popup').slideToggle();
	});

	$('.form-popup__open').click(function() {
		$('.popup').fadeOut();
	});

	$('.form-popup__open').click(function() {
		$('.fear-popup').fadeOut();
	});

	$('.form-popup__open').click(function() {
		$('.traum-popup').fadeOut();
	});

	// Клик по ссылке "Закрыть".
	$('.popup__close').click(function() {
		$('.popup-fade').fadeOut();
		return false;
	});        
 
    $('.popup__close').click(function() {
		$(this).parents('.popup').slideUp();
		return false;
	});     

    $('.popup__close').click(function() {
		$(this).parents('.fear-popup').slideUp();
		return false;
    }); 
    
    $('.popup__close').click(function() {
		$(this).parents('.traum-popup').slideUp();
		return false;
	}); 

	$('.popup__close').click(function() {
		$(this).parents('.form-popup').slideUp();
		return false;
	}); 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
    });
    
    $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup').slideUp();
		}
    });
    
    $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.fear-popup').slideUp();
		}
    });
    
    $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.traum-popup').slideUp();
		}
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.form-popup').slideUp();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
            $('.popup').slideUp();
            $('.fear-popup').slideUp();	
			$('.traum-popup').slideUp();
			$('.form-popup').slideUp();
		}
    });	
});

	// Бургер Меню

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link'); 
	let overlay = menu.find('.burger-menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu')

AOS.init({
	// Global settings:
	disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
