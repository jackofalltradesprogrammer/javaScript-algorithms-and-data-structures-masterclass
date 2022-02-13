class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const queue = new PriorityQueue();
queue.enqueue('A', 5);
queue.enqueue('B', 9);
queue.enqueue('C', 2);
queue.enqueue('D', 3);
queue;
