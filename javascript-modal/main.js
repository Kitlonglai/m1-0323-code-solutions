const modal = document.querySelector('.modal');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

function open(event) {
  modal.className = 'modal';
  overlay.className = 'overlay';
}

function close(event) {
  modal.className = 'modal hidden';
  overlay.className = 'overlay hidden';
}

openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
