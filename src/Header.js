import Title from './Title';
import Menu from './Menu';

function Header() {
  const header = document.createElement('header');
  const container = document.createElement('div');

  header.classList.add('header');
  container.classList.add('container');

  const title = new Title({ text: 'Cibo gustoso' });
  const menu = new Menu([
    { link: '#', text: 'Home' },
    { link: '#', text: 'Menu' },
    { link: '#', text: 'Contacts' },
  ]);

  header.appendChild(container);
  container.appendChild(title);
  container.appendChild(menu);

  const content = document.querySelector('#content');
  content.appendChild(header);
}

export default Header;
