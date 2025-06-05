const container = document.getElementById('matrix');

function generateLoveTexts() {
  const total = 800; // Ajusta si quieres más o menos
  for (let i = 0; i < total; i++) {
    const div = document.createElement('div');
    div.classList.add('text');
    div.textContent = 'Te amo 💖';
    container.appendChild(div);
  }
}

function startMusic() {
  const music = document.getElementById('bgmusic');
  music.play();
  document.querySelector('.overlay').style.display = 'none';
}

generateLoveTexts();
