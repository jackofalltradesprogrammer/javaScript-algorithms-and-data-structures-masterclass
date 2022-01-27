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

  // unshift() - adding a new node to the beginning of the Linked List
  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length === 1) {
      this.tail = this.head;
    }
    return this;
  }
  // get() - returives the node by its position in the Linked List
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // set() - update the value of a node based on its position in the Linked List
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;

    node.val = val;
    return true;
  }

  // insert() - insert a new node at the given index
  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const prevNode = this.get(index - 1);
      if (!prevNode) {
        return false;
      }
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  // remove() - removes a node from the Linked List

  remove(index, val) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift(val);
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  // reverse() - reverse the Linked List
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// const first = new Node('Hi'); //?
// first.next = new Node('there'); //?
// first.next.next = new Node('how'); //?

// a -> b -> c -> d -> e -> f -> g -> h
// a <- b <- c <-d <- e <- f <- g <- h

const list = new SinglyLinkedList();
list.push('hi');
list.push('how are you');
list.push('im fine');
list.pop();
list.shift(); //?
list.unshift('Thank you! N2t now'); //?
list.get(0);
list.set(1, 'Keep grinding!'); //?
list.set(-1, 'Keep grinding!'); //?
list.insert(2, 'Go on!');
list.insert(2, 'learn from your mistakes!');
list.remove(3); //?
list;
list.reverse();

list;
