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

  pop() {
    if (!this.head) return undefined;
    else {
      let count = 1;
      let node = this.head;
      while (node.next) {
        if (count === this.length - 1) {
          const temp = node.next;
          node.next = null;
          this.tail = node;
          this.length--;
          return temp;
        }
        node = node.next;
        count++;
      }
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
  }

  // Shift() - removing a node from the beginning of the Linked List!
  shift() {
    // no head
    if (!this.head) return undefined;

    // only one node - need to update the tail
    // remove the head and update new head
    const node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node;
  }
}

// const first = new Node('Hi'); //?
// first.next = new Node('there'); //?
// first.next.next = new Node('how'); //?

const list = new SinglyLinkedList();
list.push('hi');
list.push('how are you');
list.push('im fine');
list.pop();
list.shift(); //?

list;
