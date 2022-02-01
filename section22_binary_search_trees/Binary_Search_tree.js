class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert() - add a node to the binary search tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) return (this.root = newNode);
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
    return this;
  }

  // find() - return true if the value is found in the tree
  // recursive solution
  findRecursive(value) {
    function recursive(current) {
      if (!current) return false;

      if (value < current.value) {
        return recursive(current.left);
      } else if (value > current.value) {
        return recursive(current.right);
      } else if (value === current.value) {
        return true;
      }
    }
    return recursive(this.root);
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.find(12); //?

tree;
