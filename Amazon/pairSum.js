function findPair(arr, sum) {
  const hash = {};
  for(let e of arr) {
    const complement = 10 - e;
    if (hash[e]) {

      return [hash[e], e]
    } else {
      hash[complement] = e;
    }
  }

}

findPair([5,3,4,2,8,5], 10); //?