import menuData from '../menu.json';
import menuTemplate from '../templates/menu-teplate.hbs';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('beforeend', menuTemplate(menuData));

 