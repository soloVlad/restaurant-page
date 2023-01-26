import Tagline from './Tagline';

function Home() {
  const sentences = ['Made by Italians.', 'Enjoyed by Everyone'];
  const home = document.createElement('div');
  const container = document.createElement('div');
  const tagline = new Tagline(sentences);

  home.classList.add('home');
  container.classList.add('container');

  container.appendChild(tagline);
  home.appendChild(container);

  return home;
}

function displayHome() {
  const content = document.querySelector('#content');
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(Home());
}

export default displayHome;
