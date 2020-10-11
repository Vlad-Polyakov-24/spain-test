import $ from 'jquery';
window.$ = $;
window.jquery = $;
window.jQuery = $;

import objectFitImages from 'object-fit-images';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
import 'swiper/swiper-bundle.css';

require('@fancyapps/fancybox');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

/*HEADER*/
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 900) $(".header").removeClass('header-scroll');
	else $(".header").addClass('header-scroll');
});
/*=======*/

/*BURGER*/
$('.header__burger').click(function (event) {
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header__menu-link').click(function (event) {
	$('body').removeClass('lock');
	$('.header__menu').removeClass('active');
	$('.header__burger').removeClass('active');
});
/*=========*/

/*SWIPER*/
const swiper = new Swiper('.swiper-container__top', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

const swiper_2 = new Swiper('.swiper-container__gallery', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 10000,
	},
	breakpoints: {
		375: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});
/*=======*/

$('[data-fancybox="images"]').fancybox({
	// Options will go here
	loop: false,
});

/*CONTACTS*/
let input = document.querySelectorAll('.input');
for (let i = 0; i < input.length; i++) {
	input[i].addEventListener('focus', function () {

		input[i].parentElement.classList.add('active');

	});
	input[i].addEventListener('blur', function () {

		if (input[i].value === '') {
			input[i].parentElement.classList.remove('active');
		}

	});
}
/*=======*/

/*SCROLL*/
$(document).ready(function () {
	$("#header-link, #home-link, #work-link, #some-link, #footer-link").on("click", "a", function (event) {

		event.preventDefault();

		var id = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1500);
	});
});
/*=======*/

objectFitImages();