// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.pop() * productOfArray(array);
}

productOfArray([1, 2, 3, 10]); //?
