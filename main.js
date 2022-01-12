function isPalindrome(line) {
  //default case
  return line.toString() === line.toString().split('').reverse().join('');
}
