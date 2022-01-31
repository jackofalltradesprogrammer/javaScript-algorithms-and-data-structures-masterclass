function naiveStringSearch(string, subString) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (char === subString[0]) {
      let matchFound = true;
      for (let j = 0; j < subString.length; j++) {
        if (string[index + j] !== subString[j++]) {
          matchFound = false;
          break;
        }
      }
      if (matchFound) count++;
    }
  }
  return count;
}

naiveStringSearch('haha you rock hahahahahaha', 'ha'); //?
naiveStringSearch('lorie loled', 'lol'); //?
