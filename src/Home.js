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

  const content = document.querySelector('#content');
  content.appendChild(home);
}

export default Home;
