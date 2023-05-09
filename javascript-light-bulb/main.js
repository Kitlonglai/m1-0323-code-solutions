const light = document.querySelector('.light');
const body = document.querySelector('body');

body.classList.add('light-off');

light.addEventListener('click', () => {
  light.classList.toggle('on');
  body.classList.toggle('light-on');
  body.classList.toggle('light-off');
});
