// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(array, isOddCallback) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;
  return isOddCallback(array.pop()) || someRecursive(array, isOddCallback);
}

someRecursive([1, 2, 3, 4], isOdd); // true //?
someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], val => val > 10); // false
