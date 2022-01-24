function binarySearch(array, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (num < array[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return array[mid] === num ? mid : -1;
}

binarySearch([1, 2, 3, 4, 5], 5); //?
