const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};
let timerId = null;

refs.start.addEventListener('click', start);
refs.stop.addEventListener('click', stop);

function start() {
  timerId = setInterval(() => {
    changeColor(matchColor());
  }, 1000);

  refs.start.setAttribute('disabled', 'disabled');
}

function stop() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
}

function matchColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function changeColor(color) {
  refs.body.style.backgroundColor = `${color}`;
}
