// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  const length = str.length;
  if (length === 1) return true;
  if (length <= 0) return false;

  return (
    str[0] === str[length - 1] && isPalindrome(str.substr(1, str.length - 2))
  );
}

isPalindrome('foobar'); //?
