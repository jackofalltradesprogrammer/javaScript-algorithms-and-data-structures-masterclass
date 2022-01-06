function getHash(num) {
  const hash = {};
  for (let char of `${num}`) {
    hash[char] = ++hash[char] || 1;
  }
  return hash;
}

function sameFrequency(num1, num2) {
  const hashNum1 = getHash(num1);
  const hashNum2 = getHash(num2);

  for (let key in hashNum1) {
    if (hashNum1[key] !== hashNum2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(234, 432));
console.log(sameFrequency(22, 222));
