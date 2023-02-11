// Меню бургер

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navigation');
const iconBtn = document.getElementById('menu-icon');
const body = document.body;
const active = 'active';
const lock = 'lock';


menuBtn.addEventListener('click', e => {
	menu.classList.toggle(active)
	menuBtn.classList.toggle(active)
	body.classList.toggle(lock)
	iconBtn.classList.toggle('fa-times')
})

menu.addEventListener('click', e => {
	if (e.target.classList.contains('navigation')) {
		menu.classList.remove(active)
		menuBtn.classList.remove(active)
		body.classList.remove(lock)
	}
})

menu.querySelectorAll('.navigation__link').forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.remove(active)
		menuBtn.classList.remove(active)
		body.classList.remove(lock)
		iconBtn.classList.remove('fa-times')
	})
})



const anchors = document.querySelectorAll('.data-link');

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

