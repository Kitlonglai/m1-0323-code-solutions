/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  swapChars(firstIndex, secondIndex, array);
  return array.join('');
}
