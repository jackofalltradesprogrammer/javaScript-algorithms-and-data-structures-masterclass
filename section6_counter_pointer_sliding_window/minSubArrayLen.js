function minSubArrayLen(array, minSum) {
  let left = 0;
  let right = 1;
  if (left[0] >= minSum) return 1;
  if (left[0] < minSum && array.length === 1) return 0;

  let sum = array[left] + array[right]; //?
  let count = Infinity; //?
  let tempCount = 2;

  // console.log('objectestt', sum);
  while (left < array.length) {
    // console.log(sum);
    if (sum >= minSum) {
      if (left === right) return 1;
      if (tempCount < count) {
        count = tempCount;
      }
      sum = sum - array[left++];
      tempCount--;
    } else if (right === array.length - 1) {
      break;
    } else if (right < array.length - 1 && sum < minSum) {
      // console.log('running');
      sum = sum + array[++right];
      tempCount++;
    }
  }
  if (count === Infinity) count = 0;
  return count;
}

console.log(minSubArrayLen([2, 2, 4, 2, 4, 3], 7)); //
