var maxArea = function (height) {
  let left = 0;
  let maxArea = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); //?
