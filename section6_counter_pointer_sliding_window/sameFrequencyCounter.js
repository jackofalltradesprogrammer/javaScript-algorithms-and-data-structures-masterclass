const SameFrequencyCounter = (arr1, arr2) => {
  const squareCounterHash = {};
  // build a hash of frequecy of elements of arr2
  for (let element of arr2) {
    squareCounterHash[element] = ++squareCounterHash[element] || 1;
  }

  // loop on arr1 and compare the counter from the hash of sqaures. Decrement accordingly
  for (let element of arr1) {
    const square = element ** 2;
    // return false if square of element not found or 0
    if (squareCounterHash[square]) {
      squareCounterHash[square] = --squareCounterHash[square];
    } else {
      return false;
    }
  }
  return true;
};

SameFrequencyCounter([1, 2, 1], [1, 4]);
