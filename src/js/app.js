import * as functions from "./modules/functions.js";

functions.isWebp();

/////     SCROLL       ///////////////////////////////////////////

const header = document.querySelector('.header');
const img = document.querySelector('.header__logoImg');
const imgDark = document.querySelector('.header__logoDarkImg');

window.addEventListener('scroll', () => {
	let scrollPosition = window.scrollY;


	if (scrollPosition > 450) {
		header.classList.add('_fixed');
		header.style.top = "0";
		img.style.display = "none";
		imgDark.style.display = "inline";
		
	} else {
		header.classList.remove('_fixed');
		img.style.display = "inline";
		imgDark.style.display = "none";
	}
})

/////     MENU ACTIVE        ///////////////////////////////////////

const menuList = document.querySelector('.menu-block');
const menuLinks = document.querySelectorAll('.menu-block__link');

menuList.addEventListener('click', (e) => {
	e.preventDefault();
	let link = e.target;
	menuLinks.forEach(el => el.classList.remove('_active'))
	link.classList.add('_active')
})
