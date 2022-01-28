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

  // pop() removing a node from the end of the doubly linked list
  pop() {
    //no node in the list
    if (this.length === 0) return undefined;
    // if only one node in the list
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      poppedNode.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }

  // shift() removing a node from the beginning of the doubly linked list.
  shift() {
    //    a <-> b <-> c
    // if list is empty
    if (!this.head) return undefined;

    const oldHead = this.head;
    // if only one element is there
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // unshift() adding a node to the beginning of the doubly linked list
  unshift(val) {
    //    d      a <-> b <-> c
    const newHead = new Node(val);
    // no node in the list
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    // increment and return the list
    this.length++;
    return this;
  }

  // get() - Access a node from the doubly linked list by its position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    if (index < this.length / 2) {
      let counter = 0;
      let node = this.head;
      while (node) {
        if (counter === index) return node;
        counter++;
        node = node.next;
      }
    } else {
      let counter = this.length - 1;
      let node = this.tail;
      while (node) {
        if (counter === index) return node;
        counter--;
        node = node.prev;
      }
    }
  }
}

// const node = new Node('mango');
// node;

const list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('6');
list.push('LAST ITEM!!');
list.pop(); //?
list.shift(); //?
list.unshift(1); //?
list.get(6); //?
list;
