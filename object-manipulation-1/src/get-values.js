/* exported getValues */
function getValues(object) {
  const array = [];
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      array.push(object[key]);
    }
  }
  return array;
}
