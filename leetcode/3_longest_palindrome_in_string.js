/**
 * @param {string} s
 * @return {string}
 */
function expandAroundCenter(string, left, right) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    // with one center
    const len1 = expandAroundCenter(s, i, i);
    // with not a single center
    const len2 = expandAroundCenter(s, i, i + 1);

    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = Math.floor(len / 2) + i;
    }
  }
  return s.substring(start, end + 1);
};
// longestPalindrome('bacabab'); //babacab //?
longestPalindrome('babad'); //babacab //?
