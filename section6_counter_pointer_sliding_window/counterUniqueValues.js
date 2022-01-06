// [1,1,1,1,1,1,1,2]
//  ^L
//    ^R

// if they are equal, i increment ^R - and also count duplicates
// if they are not equal, duplicates === 0 then ^L = ^R & ^R = ^R+1

// function countUniqueValues(sortedArray){
//     if (!sortedArray.length) return undefined
//     if (sortedArray.length === 1) return sortedArray[0]
//   let left = 0;
//   let right = 1;
//   let duplicates = 0;
//   let unique = 0;
//   let uniqueValues =[sortedArray[0]];

//   while (left < sortedArray.length && right < sortedArray.length) {
//       leftElement = sortedArray[left];
//       rightElement = sortedArray[right];

//       if (leftElement === rightElement) {
//           ++right;

//       } else if (leftElement < rightElement) {
//           uniqueValues.push(rightElement);
//           left = right;
//           ++right;
//       }
//       console.log(left, right, leftElement, rightElement, duplicates, uniqueValues)
//   }
//   console.log(uniqueValues, uniqueValues.length)
// }

// ** Method 2 ** //
function countUniqueValues(sortedArray) {
  //  ^l
  // [-2,-2,-1,-1,0,0,0,1,1]
  //     ^R

  if (!sortedArray.length) return 0;
  if (sortedArray.length === 1) return sortedArray[0];

  let left = 0;
  let right = 1;

  while (right < sortedArray.length) {
    const leftElement = sortedArray[left];
    const rightElement = sortedArray[right];
    if (leftElement === rightElement) {
      right++;
    } else {
      sortedArray[++left] = rightElement;
      right++;
    }
  }
  return left + 1;
}

countUniqueValues([-2, -2, -1, -1, 0, 0, 0, 1, 1, 2]);
