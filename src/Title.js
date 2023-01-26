function Title(data) {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = data.text;

  return title;
}

export default Title;
