// non recursive approach
function capitalizeFirst1(array) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    word = word[0].toUpperCase() + word.slice(1);
    array[i] = word;
  }
  return array;
}

// solution2:
function capitalizeFirst(array) {
  if (array.length === 0) return [];
  let string = array.pop();
  string = string[0].toUpperCase() + string.slice(1);

  return capitalizeFirst(array).concat([string]);
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana'] //?
