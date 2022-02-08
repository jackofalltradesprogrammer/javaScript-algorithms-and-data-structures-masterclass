// mainArray = [1,9,3,5,2,7,-1]
// subSeq = [9,2]

// answer : true

// subSeq : [1,5,5,2]
// answer : false

// ubSuq = [2,9]
// answer : false

// iteratieve O(NxM)
function verifySeq(mainArra, subSeq) {
  let lastIndex = 0;
  for (let i = 0; i < subSeq.length; i++) {
    const element = subSeq[i];

    for (; lastIndex < mainArra.length; ) {
      lastIndex++;
      const compareElement = mainArra[lastIndex];

      if (element === compareElement) {
        break;
      } else if (lastIndex === mainArra.length - 1) {
        return false;
      }
      // break if number found
    }
  }
  return true;
}

//  start popping elmements from the end and start the comparison... O(N)
function verifySeq2(mainArr, subSeq) {
  let sub = subSeq.pop();
  let main = mainArr.pop();
  let match = false;
  while (true) {
    if (sub === main) {
      //set something to true
      if (subSeq.length === 0) {
        match = true;
        break;
      }
      sub = subSeq.pop();
    }
    if (mainArr.length === 0) break;
    main = mainArr.pop();
  }
  return match;
}

verifySeq2([1, 9, 3, 5, 2, 7, -1], [9, 2]); //?
