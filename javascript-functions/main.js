function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convert 5 minutes to seconds: ', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey, ' + name;
}
console.log('greeting Beavis: ', greet('Beavis'));
function getArea(width, height) {
  return width * height;
}
console.log('getting the area of 17 & 42: ', getArea(17, 42));
function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName of object: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElement of the array: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
