const student = {
  firstName: 'Kitlong',
  lastName: 'Lai',
  age: 26
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Administrator';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Porsche',
  model: '992 GT3RS',
  year: 2023
};
vehicle['color'] = 'chalk';
vehicle['isConvertible'] = false;
console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

const pet = {
  name: 'Pupperoni',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('pet:', pet);
