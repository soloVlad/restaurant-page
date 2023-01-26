import Title from './Title';
import Nav from './Nav';
import displayHome from './Home';

function Header() {
  const header = document.createElement('header');
  const container = document.createElement('div');

  header.classList.add('header');
  container.classList.add('container');

  const title = new Title({ text: 'Cibo gustoso' });
  const nav = new Nav([
    { link: '#', text: 'Home', handler: displayHome },
    { link: '#', text: 'Menu', handler() { } },
    { link: '#', text: 'Contacts', handler() { } },
  ]);

  container.appendChild(title);
  container.appendChild(nav);
  header.appendChild(container);

  return header;
}

function displayHeader() {
  const content = document.querySelector('#content');
  content.appendChild(Header());
}

export default displayHeader;
