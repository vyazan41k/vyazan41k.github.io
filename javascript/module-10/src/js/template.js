import itemTemplate from './templates/gallery-items.hbs';
import dishes from './menu.json';

const refs = {
  menu: document.querySelector('.js-menu'),
};

const makeMenu = itemTemplate(dishes);

refs.menu.insertAdjacentHTML('beforeend', makeMenu);
