import MenuItem from './MenuItem';

const menuData = [
  {
    name: 'Gnocchi with almonds',
    imgURL: './assets/img/gnocohi.jpg',
    price: 10,
  },
  {
    name: 'Mini spinach ravioli',
    imgURL: './assets/img/ravioli.jpg',
    price: 12,
  },
  {
    name: 'Lasagna',
    imgURL: './assets/img/lasagna.jpg',
    price: 8,
  },
  {
    name: 'Carbonara spaghetti',
    imgURL: './assets/img/carbonara.jpg',
    price: 15,
  },
  {
    name: 'Lasagna',
    imgURL: './assets/img/lasagna.jpg',
    price: 8,
  },
  {
    name: 'Gnocchi with almonds',
    imgURL: './assets/img/gnocohi.jpg',
    price: 10,
  },
  {
    name: 'Mini spinach ravioli',
    imgURL: './assets/img/ravioli.jpg',
    price: 12,
  },
];

function Menu() {
  const menu = document.createElement('div');
  const container = document.createElement('div');
  const menuText = document.createElement('p');
  const menuList = document.createElement('div');

  menu.classList.add('menu');
  container.classList.add('container');
  menuText.classList.add('menu-text');
  menuList.classList.add('menu-list');

  menuText.textContent = 'Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.';

  container.appendChild(menuText);
  container.appendChild(menuList);
  menu.appendChild(container);

  menuData.forEach((menuItemData) => {
    const menuItem = new MenuItem(menuItemData);
    menuList.appendChild(menuItem);
  });

  return menu;
}

function displayMenu() {
  const content = document.querySelector('#content');
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(Menu());
}

export default displayMenu;
