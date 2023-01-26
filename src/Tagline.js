function Tagline(sentences) {
  const tagline = document.createElement('h2');
  tagline.classList.add('tagline');

  sentences.forEach((sentence) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = sentence;

    tagline.appendChild(paragraph);
  });

  return tagline;
}

export default Tagline;
