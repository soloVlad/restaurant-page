import NavItem from './NavItem';

function Nav(data) {
  const nav = document.createElement('ul');

  nav.classList.add('nav');

  data.forEach((menuItemData) => {
    const navItem = NavItem(menuItemData);
    nav.appendChild(navItem);
  });

  return nav;
}

export default Nav;
