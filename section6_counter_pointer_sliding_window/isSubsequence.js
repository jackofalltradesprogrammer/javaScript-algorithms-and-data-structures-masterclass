function isSubsequence(firstString, secondString) {
  let first = 0;
  let second = 0;

  while (second < secondString.length) {
    const charFirst = firstString[first];
    const charSecond = secondString[second];

    if (charFirst === charSecond) {
      first++;
      second++;
    } else {
      second++;
    }
    if (first === firstString.length) return true;
  }
  return false;
}

// Someone's solution
// function isSubsequence(str1, str2) {
//   let count = 0;
//   for (let c of str2) {
//     if (str1[count] === c) {
//       count++;
//     }
//   }
//   return str1.length === count;
// }

console.log(isSubsequence('hello', 'hello world'));
