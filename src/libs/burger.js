"use strict"

// Меню бургер

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navigation');

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('navigation')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.navigation__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})



// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
// 	anchor.addEventListener('click', event => {
// 		event.preventDefault();

// 		const blockID = anchor.getAttribute('href').substring(1);

// 		document.getElementById(blockID).scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'start'
// 		})
// 	})
// })

// Прокрутка при клике

// const menuLinks = document.querySelectorAll('.header__main_link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener('click', onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			// const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

// 			if (mainButton.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				mainButton.classList.remove('_active');
// 				menuBtn.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlock,
// 				behavior: 'smooth'
// 			});
// 			 e.preventDefault(); 	//переход по якорю ссылки а не по href
// 		}
// 	}
// }

// Смена иконки бургера 

document.getElementById('intro_btn').onclick = function() {
	document.getElementById('menu-icon').classList.toggle('fa-times');
 }

