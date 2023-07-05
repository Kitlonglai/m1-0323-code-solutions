/* exported firstChars */
function firstChars(length, string) {
  if (length <= string) {
    return string;
  }
  return string.slice(0, length);
}
