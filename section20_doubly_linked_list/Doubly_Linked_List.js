class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push() adding a node to the end of the doubly linked list.
  push(val) {
    const newNode = new Node(val);
    // no head & no tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // has atleast one node
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// const node = new Node('mango');
// node;

const list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('LAST ITEM!!');
list;
