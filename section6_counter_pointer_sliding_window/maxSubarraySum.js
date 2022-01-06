function maxSubarraySum(array, n) {
  if (n > array.length) return null;
  // maxSum of first 'n' numbers
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  let i = 0;
  let j = i + n;

  // sliding window - we subtract first element  and add the last+1 element while sliding
  while (j < array.length) {
    tempSum -= array[i++];
    tempSum += array[j++];

    // compare the maxSum with temp sum and move onwards
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400, 500], 2));
