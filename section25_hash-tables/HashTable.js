class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  // hash function using prime numbers to reduce collisions
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set(key, value) - adds elements to an array using seperate chaining
  // Seperate Chaining adds to the same array at the given index
  set(key, value) {
    const index = this._hash(key);
    let container = this.keyMap[index];
    if (!container) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // get(key) - gets the value for the given key
  get(key) {
    const index = this._hash(key);
    let container = this.keyMap[index];
    if (container) {
      for (const object of container) {
        if (object[0] === key) return object[1];
      }
    }
    return undefined;
  }
}

const hash = new HashTable();
hash.set('pink', '#324356');
hash.set('blue', '#234236');
hash.set('green', '#63236');
hash.set('black', '#734236');
hash.set('red', '#034236');
hash.get('pink'); //?
hash.get('blue'); //?
hash.get('green'); //?
hash.get('black'); //?
hash;
