"use strict"

// const isMobile = {
// 	Android: function () {
// 		 return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		 return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		 return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		 return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		 return (
// 					isMobile.Android()
// 					|| isMobile.BlackBerry()
// 					|| isMobile.iOS()
// 					|| isMobile.Opera()
// 					|| isMobile.Windows()
// 					);
// 	}
// };

// if (isMobile.any()) {
// 	document.body.classList.add('_touch');
// } else {
// 	document.body.classList.add('_pc');
// }

// Меню бургер

const mainButton = document.querySelector('.header__main_button');
const mainMenu = document.querySelector('.header__main_menu');

if (mainButton){
	mainButton.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		mainButton.classList.toggle('_active');
		mainMenu.classList.toggle('_active');
	});
}




// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (mainButton.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				mainButton.classList.remove('_active');
				mainMenu.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			 e.preventDefault(); 	//переход по якорю ссылки а не по href
		}
	}
}

// Смена иконки бургера 

document.getElementById('intro_btn').onclick = function() {
	document.getElementById('menu-icon').classList.toggle('fa-times');
 }

// Смена иконки ссылки

//  document.getElementById('portfolio__item_link').mouseover= function() {
// 	document.getElementById('portfolio__item_link').classList.mouseover('portfolio__item_link-yellow-arrow');
//  }