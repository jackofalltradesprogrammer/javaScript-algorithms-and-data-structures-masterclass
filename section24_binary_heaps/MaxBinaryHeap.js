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

  // insert(value)  - adds an element to the max heap and
  //                  make sure the heap is correctly structured.
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(10);
maxBinaryHeap.insert(11);
maxBinaryHeap.insert(9);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(20);
maxBinaryHeap.insert(1);
maxBinaryHeap.insert(199);

maxBinaryHeap;
