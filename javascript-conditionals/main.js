/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('is 1 < 5: ', isUnderFive(1));
console.log('is 15 < 5: ', isUnderFive(15));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('is 6 even: ', isEven(6));
console.log('is 8 even: ', isEven(8));
console.log('is 11 even: ', isEven(11));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('does Job start with J: ', startsWithJ('Job'));
console.log('does door start with J: ', startsWithJ('door'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const todd = {
  name: 'todd',
  age: 18
};
console.log('is Todd OldEnoughToDrink: ', isOldEnoughToDrink(todd));

const bob = {
  name: 'bob',
  age: 60
};

console.log('is bob OldEnoughToDrink: ', isOldEnoughToDrink(bob));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const billy = {
  name: 'billy',
  age: 5
};
console.log('is billy OldEnoughToDrive: ', isOldEnoughToDrive(billy));

const peter = {
  name: 'peter',
  age: 35
};
console.log('is peter OldEnoughToDrive: ', isOldEnoughToDrive(peter));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

const chris = {
  name: 'chris',
  age: 24
};
console.log('is chris OldEnoughToDrinkAndDrive: ', isOldEnoughToDrinkAndDrive(chris));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizeAcidity of 1: ', categorizeAcidity(1));
console.log('categorizeAcidity of 7: ', categorizeAcidity(7));
console.log('categorizeAcidity of 11: ', categorizeAcidity(11));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
      break;
  }
}

console.log('introduceWarnerBro wakko:', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro dot:', introduceWarnerBro('dot'));
console.log('introduceWarnerBro x:', introduceWarnerBro('x'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Matrix');
      break;
    case 'comedy':
      console.log('Hangover');
      break;
    case 'horror':
      console.log('Scream');
      break;
    case 'drama':
      console.log('Casino');
      break;
    case 'musical':
      console.log('Grease');
      break;
    case 'sci-fi':
      console.log('Interstellar');
      break;
  }
}

console.log('recommendMovie action: ', recommendMovie('action'));
console.log('recommendMovie comedy: ', recommendMovie('comedy'));
console.log('recommendMovie sci-fi: ', recommendMovie('sci-fi'));
