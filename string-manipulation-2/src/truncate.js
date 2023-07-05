/* exported truncate */
/* Create a function named truncate with 2 parameters: length and string.
Within the code block create an if statement: if length is less than or equal to string;
Then return string.
If the condition is false, create a return stmt that truncates a string from 0 index and ends with the length parameter, and concatenated with an ellipsis at the end.
*/
function truncate(length, string) {
  if (length <= string) {
    return string;
  }
  return string.slice(0, length) + '...';
}
