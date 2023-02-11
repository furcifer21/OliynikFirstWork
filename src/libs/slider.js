require('slick-carousel');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
const $ = require('jquery');


$(function(){
  $('.testimonials-block__slider-list').slick({
		infinite: true,
		prevArrow: '.testimonials-block__arrow_left',
		nextArrow: '.testimonials-block__arrow_right',
		
  });
});


$(function(){
  $('.blog-block__slider').slick({
		infinite: true,
		fade: true,
		speed: 1000,
		infinite: true,
		cssEase: 'ease-in-out',
		prevArrow: '.blog-block__arrow-left',
		nextArrow: '.blog-block__arrow-right',
		
  });
});


