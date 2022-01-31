class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(length = 0) {
    this.first = null;
    this.last = null;
    this.length = length;
  }

  // add value to the stack - the beginning of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = temp;
      this.first.next = temp;
    }
    return this.length++; //?
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);

stack;
