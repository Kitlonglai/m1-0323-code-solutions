const dollars = 500;
const houses = 34;
const vehicles = 416;
const maximumValue = Math.max(dollars, houses, vehicles);
console.log('max value of dollars, houses, and vehicles: ', maximumValue);
const heroes = ['batman', 'ironman', 'hulk', 'spiderman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);
const library = [
  {
    title: 'harry potter',
    author: 'JK Rowling'
  },
  {
    title: 'odyssey',
    author: 'homer'
  },
  {
    title: 'grapes of wrath',
    author: 'john steinbeck'
  }];
const lastBook = library.pop();
console.log('value of lastBook: ', lastBook);
const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);
const fullName = 'Kitlong' + ' ' + 'Lai';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);