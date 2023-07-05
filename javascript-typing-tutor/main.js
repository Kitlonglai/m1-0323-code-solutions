const spanElements = document.querySelectorAll('#typing-test span');
let currentIndex = 0;

spanElements[currentIndex].classList.add('current');

document.addEventListener('keydown', event => {
  const key = event.key;

  if (key === spanElements[currentIndex].textContent) {
    spanElements[currentIndex].classList.add('correct');
    spanElements[currentIndex].classList.remove('current');
    currentIndex++;
    if (currentIndex < spanElements.length) {
      spanElements[currentIndex].classList.add('current');
    }
  } else {
    spanElements[currentIndex].classList.add('wrong');
  }
});
