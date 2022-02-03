class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(index = this.values.length - 1) {
    while (index > 0) {
      const currentVal = this.values[index];
      const parentIndex = Math.floor((index - 1) / 2); // value of index
      const parentCurrentVal = this.values[parentIndex];
      if (currentVal > parentCurrentVal) {
        this.values[parentIndex] = currentVal;
        this.values[index] = parentCurrentVal;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

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

maxBinaryHeap;
