let clicked = 0;
const hotbutton = document.querySelector('.hot-button');
const clickcount = document.querySelector('.click-count');
hotbutton.addEventListener('click', () => {
  clicked++;
  clickcount.textContent = 'Clicks: ' + clicked;
  if (clicked < 4) {
    hotbutton.className = 'hot-button cold';
  } else if (clicked < 7) {
    hotbutton.className = 'hot-button cool';
  } else if (clicked < 10) {
    hotbutton.className = 'hot-button tepid';
  } else if (clicked < 13) {
    hotbutton.className = 'hot-button warm';
  } else if (clicked < 16) {
    hotbutton.className = 'hot-button hot';
  } else {
    hotbutton.className = 'hot-button nuclear';
  }
});
