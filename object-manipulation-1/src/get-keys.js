/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      array.push(key);
    }
  }
  return array;
}
