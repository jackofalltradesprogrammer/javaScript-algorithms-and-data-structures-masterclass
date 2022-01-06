function areThereDuplicates(...args) {
  if (args.length < 2) return false;
  // Use pointer approach
  let left = 0;

  // loop over it
  for (let right = 1; right < args.length; right++) {
    const leftElement = args[left];
    const rightElement = args[right];
    if (leftElement === rightElement) return true;
    left = right;
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 1, 1));
//                             ^l   ^r
