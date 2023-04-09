/* exported getValue */

/* Create a function getValue with the parameters object and key.
Create an if statement that checks if the object has the properties of object and key.
Create a return statement that returns value in the object at the key property.
*/

function getValue(object, key) {
  if (Object.hasOwn(object, key)) {
    return object[key];
  }
}
