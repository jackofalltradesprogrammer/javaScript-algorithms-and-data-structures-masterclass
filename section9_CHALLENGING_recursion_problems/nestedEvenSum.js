function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    const element = obj[key];
    if (typeof element === 'object') {
      sum = sum + Number(nestedEvenSum(element));
    } else if (typeof element === 'number') {
      if (element % 2 === 0) sum = sum + element;
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

nestedEvenSum(obj1, 0); // 6 //?
nestedEvenSum(obj2, 0); // 10 //?
