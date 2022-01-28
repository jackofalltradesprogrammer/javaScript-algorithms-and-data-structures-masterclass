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

  // set(index, val) - update the value of a node in a doubly linked list
  set(index, val) {
    // use get() to find node
    const node = this.get(index);
    return node ? true : false;
  }

  // insert() - adding a node in a doubly linked list
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const afterNode = this.get(index);
    const beforeNode = afterNode.prev;
    const newNode = new Node(val);

    newNode.next = afterNode;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // remove() - removing a node from a doubly linked list by its position
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return true;
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
list.get(5); //?
list.set(6, 7); //?
list.insert(6, 7); //?
list.insert(4, 55); //?
list.remove(7); //?
list;
