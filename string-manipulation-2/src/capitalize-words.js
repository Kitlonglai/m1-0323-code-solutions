/* exported capitalizeWords */
function capitalizeWords(string) {
  const capitalWords = [];
  const words = string.split(' ');
  for (const cap in words) {
    capitalWords[cap] = words[cap][0].toUpperCase() + words[cap].slice(1).toLowerCase();
  }
  return capitalWords.join(' ');
}
