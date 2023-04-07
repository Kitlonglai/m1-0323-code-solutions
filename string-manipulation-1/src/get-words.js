/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  const words = string.split(' ');
  return words;
}
