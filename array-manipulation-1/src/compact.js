/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(compact([true, true, false, true]));
console.log(compact([{}, null, {}, {}]));
console.log(compact([-0, 8, 9, 10, 11, 0, 13]));
console.log(compact([[], undefined, [], [], undefined]));
console.log(compact(['', 'foo', 'bar', '', 'baz', 'qux']));
console.log(compact([1, 'a', {}, [], true]));
