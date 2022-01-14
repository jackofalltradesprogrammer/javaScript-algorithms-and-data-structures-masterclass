function findLongestSubstring(subString) {
  // add whatever parameters you deem necessary - good luck!
  let count = -Infinity;
  let tempCount = 1;
  let left = 0;
  let hash = { [subString[left]]: 1 };
  let right = 1;
  if (subString.length === 1) return 1;
  while (left < subString.length) {
    const leftChar = subString[left];
    const rightChar = subString[right];
    if (tempCount > count) {
      count = tempCount; //?
    }
    if (hash[rightChar]) {
      hash[leftChar] = hash[leftChar] - 1;
      tempCount = tempCount - 1;
      left++;
    } else if (right < subString.length) {
      tempCount = tempCount + 1;
      right++;
      hash[rightChar] = ++hash[rightChar] || 1;
    } else {
      break;
    }
  }

  if (count === -Infinity) count = 0;
  return count; //?
}

console.log(findLongestSubstring('ubstring')); //?
