/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  }
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}
