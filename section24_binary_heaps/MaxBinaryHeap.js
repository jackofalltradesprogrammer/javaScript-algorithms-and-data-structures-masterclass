class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // To fix the postioning of the values to satisfy the rules of max heap
  bubbleUp(index = this.values.length - 1) {
    const currentVal = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // value of index
      const parentVal = this.values[parentIndex];

      if (currentVal <= parentVal) break;
      this.values[parentIndex] = currentVal;
      this.values[index] = parentVal;
      index = parentIndex;
    }
  }

  bubbleUpRecursive(index = this.values.length - 1) {
    if (index === 0) return;
    const currentVal = this.values[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentVal = this.values[parentIndex];
    if (currentVal <= parentVal) return;
    this.values[parentIndex] = currentVal;
    this.values[index] = parentVal;
    this.bubbleUpRecursive(parentIndex);
  }

  // insert(value)  - adds an element to the max heap and
  //                  make sure the heap is correctly structured.
  insert(value) {
    this.values.push(value);
    this.bubbleUpRecursive();
  }

  // bubbleDown(index)  - moves the value index down at the correct postioning
  //                      for the max binary heap
  bubbleDown(index = 0) {
    const currentVal = this.values[index];
    const length = this.values.length;
    let childIndex = null;
    while (index < length) {
      let leftElement = null;
      const leftIndex = 2 * index + 1;
      let rightElement = null;
      const rightIndex = 2 * index + 2;
      if (leftIndex < length) {
        leftElement = this.values[leftIndex];
      }
      if (rightIndex < length) {
        rightElement = this.values[rightIndex];
      }

      if (currentVal < leftElement || currentVal < rightElement) {
        if (leftElement > rightElement) {
          childIndex = leftIndex;
        } else {
          childIndex = rightIndex;
        }
      } else {
        break;
      }
      // Make a swap
      this.values[index] = this.values[childIndex];
      this.values[childIndex] = currentVal;
      index = childIndex;
    }
  }

  bubbleDownRecursive(index = 0, length = this.values.length) {
    // 1 23 24 23 11 9
    const current = this.values[index];
    const leftIndex = 2 * index + 1;
    let childIndex = null;
    let leftElement = null;
    if (leftIndex < length) {
      leftElement = this.values[leftIndex];
    }
    const rightIndex = 2 * index + 2;
    let rightElement = null;
    if (rightIndex < length) {
      rightElement = this.values[rightIndex];
    }
    if (current < leftElement || current < rightElement) {
      if (leftElement > rightElement) {
        childIndex = leftIndex;
      } else {
        childIndex = rightIndex;
      }
    } else {
      return;
    }
    this.values[index] = this.values[childIndex];
    this.values[childIndex] = current;
    this.bubbleDownRecursive(childIndex);
  }

  // extractMax() - remove the max element from the max binary heap
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDownRecursive();
    }
    return max;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
maxBinaryHeap.extractMax(); //?
maxBinaryHeap.extractMax(); //?

maxBinaryHeap;
