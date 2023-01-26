import NavItem from './MenuItem';

function Nav(data) {
  const nav = document.createElement('ul');

  nav.classList.add('menu');

  data.forEach((menuItemData) => {
    const navItem = NavItem(menuItemData);
    nav.appendChild(navItem);
  });

  return nav;
}

export default Nav;
