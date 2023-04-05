/* exported reverse */
function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverse(['foo', 'bar', 'baz']));
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([false, true, false, true]));
console.log(reverse([]));
