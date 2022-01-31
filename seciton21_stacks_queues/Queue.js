class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // enqueue(val) add node to the queue
  // adding at the end of the list

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.length++;
  }

  dequeue() {
    if (!this.length) {
      return null;
    }
    const temp = this.first;
    this.first = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return temp.val;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(8);
queue.dequeue(); //?
queue.dequeue(); //?
queue.dequeue(); //?
queue.dequeue(); //?
queue;
