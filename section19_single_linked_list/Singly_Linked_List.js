// piece of data - value
// referce to next node -next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

// const first = new Node('Hi'); //?
// first.next = new Node('there'); //?
// first.next.next = new Node('how'); //?

const list = new SinglyLinkedList();
list.push('hi');
list.push('how are you');
list.push('im fine');

list;
