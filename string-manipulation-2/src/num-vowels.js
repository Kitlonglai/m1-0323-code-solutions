/* exported numVowels */
function numVowels(string) {
  const vowels = 'aeiouAEIOU';
  let number = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      number++;
    }
  }

  return number;
}
