// function validAnagram(string1, string2){
//   // add whatever parameters you deem necessary - good luck!
//   // create two hashes for two strings
//   if (string1.length !== string2.length) return false

//   const string1Hash = getHash(string1)
//   const string2Hash = getHash(string2)

//   for(let key in string1Hash){
//       if(string1Hash[key] != string2Hash[key]) {
//           return false
//       }
//   }

//   return true

//   // compare the strings

// }

// function getHash(string) {
//     const hash = {}
//     for(let char of string) {
//         hash[char] = ++hash[char] || 1
//     }
// }
function validAnagram(string1, string2) {
  function getHash(string) {
    const hash = {};
    for (let char of string) {
      hash[char] = ++hash[char] || 1;
    }
  }
  // add whatever parameters you deem necessary - good luck!
  // create two hashes for two strings
  if (string1.length !== string2.length) return false;
  //   if (string1 === string2) return true

  const string1Hash = getHash(string1);
  const string2Hash = getHash(string2);

  console.log(string1Hash, string2Hash);

  for (let key in string1Hash) {
    if (string1Hash[key] != string2Hash[key]) {
      return false;
    }
  }

  return true;

  // compare the strings
}

console.log(validAnagram('', ''));
