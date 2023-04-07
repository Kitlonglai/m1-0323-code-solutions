/* exported tail */
/* Define a function named tail with array as its parameter.
Assign an empty array to a variable.
Create a for loop that starts its initialization at 1, loops until its condition is less than the length of the array, and increments by 1.
Inside the loop code block, each index of the array should be put into the new empty array, skipping the 0th index value in the array.
Return the values of the new array when the function is called.
*/

function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
