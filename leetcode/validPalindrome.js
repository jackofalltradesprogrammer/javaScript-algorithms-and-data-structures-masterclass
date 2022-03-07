var isPalindrome = function(s) {
  // convert to lowercase
  s = s.toLowerCase();
  // remove all non alpha numeric characters
  s.charAt(0) //?
  const cleanStr = s.split('').filter( char => (char.charCodeAt(0) >= 97 &&  char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 48 &&  char.charCodeAt(0) <= 57) );
  // verify if same forward or backward
  let left = 0;
  let right = cleanStr.length - 1;
  while(left<right) {
    if(cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

isPalindrome("0P"); //?
