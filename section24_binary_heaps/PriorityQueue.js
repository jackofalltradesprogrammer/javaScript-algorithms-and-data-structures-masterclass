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

  bubbleDown(index = 0, length = this.values.length) {
    // [1, 11, 12, 2, 4];
    const current = this.values[index];
    let childIndex = null;
    while (index < length) {
      const leftIndex = 2 * index + 1;
      let leftNode = null;
      if (leftIndex < length) {
        leftNode = this.values[leftIndex];
      }
      const rightIndex = 2 * index + 2;
      let rightNode = null;
      if (rightIndex < length) {
        rightNode = this.values[rightIndex];
      }

      const leftPriority = leftNode?.priority || Infinity;
      const rightPriority = rightNode?.priority || Infinity;
      if (leftPriority < current.priority || rightPriority < current.priority) {
        if (leftPriority < rightPriority) {
          childIndex = leftIndex;
        } else {
          childIndex = rightIndex;
        }
      } else {
        break;
      }
      this.values[index] = this.values[childIndex];
      this.values[childIndex] = current;
      index = childIndex;
    }
  }

  // Dequeue() - Remove the node with the highest priority
  dequeue() {
    const highestNode = this.values[0];
    const endNode = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = endNode;
      this.bubbleDown();
    }
    return highestNode;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(20, 10);
priorityQueue.enqueue(19, 11);
priorityQueue.enqueue(30, 5);
priorityQueue.enqueue(20, 1);
priorityQueue.enqueue(20, 15);
priorityQueue.dequeue(); //?
priorityQueue.dequeue(); //?
priorityQueue.dequeue(); //?
priorityQueue.dequeue(); //?
priorityQueue.dequeue(); //?
priorityQueue.dequeue(); //?
priorityQueue;
