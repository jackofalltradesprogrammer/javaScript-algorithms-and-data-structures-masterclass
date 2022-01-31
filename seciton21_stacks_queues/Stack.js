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

  // push(val) add value to the stack - the beginning of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.length++; //?
  }

  // pop() - pop the last node from stack and decrement the length
  pop() {
    if (this.length === 0) {
      return null;
    }
    const removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return removedNode.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop(); //?
stack.pop(); //?

stack;
