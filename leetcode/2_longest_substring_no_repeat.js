// a  b c  a  b  c  b  b
//         ^l
//                ^r
// visited { a: true, b: true, c: false }
// length  r - l > 3 ?
var lengthOfLongestSubstring = function(s) {
  const hash = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let visited = {}

  while (true) {
    console.log(left, right);
       if(!visited[s[right]]){
           visited[s[right]] = true;
           right++; //?
       } else {
           visited[s[left]] = false;
           left++; //?

       }
      if (right - left > maxLength) {
          maxLength = right - left;
      }
      if ( right === s.length) break;
  }

  return maxLength;

};

lengthOfLongestSubstring("aaaab"); //?