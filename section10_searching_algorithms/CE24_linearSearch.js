function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

linearSearch([10, 15, 18, 35, 30], 15); //?
