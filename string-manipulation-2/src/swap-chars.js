/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swap = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swap += string[secondIndex];
    } else if (i === secondIndex) {
      swap += string[firstIndex];
    } else {
      swap += string[i];
    }
  }
  return swap;
}
