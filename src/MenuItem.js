function MenuItem(data) {
  const menuItem = document.createElement('li');
  const menuItemLink = document.createElement('a');

  menuItem.classList.add('menu-item');
  menuItemLink.classList.add('menu-item-link');

  menuItemLink.textContent = data.text;
  menuItemLink.href = data.link;

  menuItem.appendChild(menuItemLink);

  menuItem.addEventListener('click', data.handler);

  return menuItem;
}

export default MenuItem;
