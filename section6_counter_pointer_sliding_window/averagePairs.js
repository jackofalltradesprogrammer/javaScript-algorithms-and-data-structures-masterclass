function averagePair(array, average) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const leftElement = array[left];
    const rightElement = array[right];

    const avg = (leftElement + rightElement) / 2;

    if (avg === average) return true;
    else if (avg < average) left++;
    else if (avg > average) right--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
