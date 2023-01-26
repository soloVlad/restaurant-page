import MenuItem from './MenuItem';

function Menu(data) {
  const menu = document.createElement('ul');

  menu.classList.add('menu');

  data.forEach((menuItemData) => {
    const menuItem = MenuItem(menuItemData);
    menu.appendChild(menuItem);
  });

  return menu;
}

export default Menu;
