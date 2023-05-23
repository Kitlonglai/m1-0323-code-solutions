const array = [
  {
    isbn: 50,
    title: 'harry potter',
    author: 'jk rowling'
  },
  {
    isbn: 84,
    title: 'the hobbit',
    author: 'jrr tolkien'
  },
  {
    isbn: 99,
    title: 'the da vinci code',
    author: 'dan brown'
  }
];
console.log('value of array: ' + array);
console.log(typeof array);
const jsonarray = JSON.stringify(array);
console.log('value of jsonarray: ' + jsonarray);
console.log(typeof jsonarray);
const student = '{"id": 7, "name": "bond"}';
console.log('value of student: ' + student);
console.log(typeof student);
const object = JSON.parse(student);
console.log('value of object: ' + object);
console.log(typeof object);
