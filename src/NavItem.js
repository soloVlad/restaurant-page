function NavItem(data) {
  const navItem = document.createElement('li');
  const navItemLink = document.createElement('a');

  navItem.classList.add('menu-item');
  navItemLink.classList.add('menu-item-link');

  navItemLink.textContent = data.text;
  navItemLink.href = data.link;

  navItem.appendChild(navItemLink);

  navItem.addEventListener('click', data.handler);

  return navItem;
}

export default NavItem;
