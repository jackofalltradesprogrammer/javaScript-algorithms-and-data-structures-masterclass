// Implement Priority Queue using MinBinaryHeap
class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // bubbleUp - Rearranges the nodes in a min binary heap
  bubbleUp(index = this.values.length - 1) {
    const current = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];
      if (current.priority < parentNode.priority) {
        this.values[index] = parentNode;
        this.values[parentIndex] = current;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Enqueue(value, priority) - Add a node to the queue and rearrange the min binary heap
  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(20, 10);
priorityQueue.enqueue(19, 11);
priorityQueue.enqueue(30, 5);
priorityQueue;
