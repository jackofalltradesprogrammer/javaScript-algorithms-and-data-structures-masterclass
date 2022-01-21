// const flattenedArray = [];
// function flatten(array) {
//   if (array.length === 0) return;

//   const element = array[0];
//   if (array.length > 1) {
//     array = array.slice(1);
//   } else {
//     array = [];
//   }
//   if (typeof element === 'object' && Array.isArray(element)) {
//     flatten(element);
//   } else {
//     flattenedArray.push(element);
//   }
//   flatten(array);
// }

// Method 2
function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5] //?
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
// flattenedArray;
