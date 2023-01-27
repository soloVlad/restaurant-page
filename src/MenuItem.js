function MenuItem(menuItemData) {
  const item = document.createElement('div');
  const itemName = document.createElement('h3');
  const itemPrice = document.createElement('p');
  const itemImg = document.createElement('img');

  itemName.textContent = menuItemData.name;
  itemPrice.textContent = `$${menuItemData.price}`;
  itemImg.src = menuItemData.imgURL;

  item.classList.add('menu-item');
  itemName.classList.add('menu-item-name');
  itemPrice.classList.add('menu-item-price');
  itemImg.classList.add('menu-item-img');

  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemPrice);

  return item;
}

export default MenuItem;
