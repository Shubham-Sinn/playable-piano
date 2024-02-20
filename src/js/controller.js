let pianoContainer = document.getElementsByClassName('piano-container');
const base = './src/audio/';

window.onload = () => {
  for (let i = 1; i <= 24; i++) {
    let div = document.createElement('div');
    div.classList.add('key', i <= 10 ? 'black-key' : 'white-key');

    // for playing audio on click
    const number = i <= 9 ? '0' + i : i;
    div.addEventListener('click', () => {
      new Audio(`${base}key${number}.mp3`).play();
    });

    pianoContainer[0].appendChild(div);
    console.log(div);
  }
};
