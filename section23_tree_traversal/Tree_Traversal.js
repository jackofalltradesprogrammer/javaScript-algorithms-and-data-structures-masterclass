import BinarySearchTree from '../section22_binary_search_trees/Binary_Search_tree';

class BreadthFirstSearch extends BinarySearchTree {
  constructor() {
    super();
  }

  //BFS() - Implement Breadth first search
  BFS2() {
    const queue = [this.root]; // using push() and shift() to add/remove nodes
    const result = [];
    let current = this.root;
    // start by putting root's value
    while (queue.length) {
      const current = queue.shift();

      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  // BFS() - recursive
  BFS() {
    // const queue = [this.root];
    const result = [];
    function recursive(queue) {
      if (!queue.length) return;
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      recursive(queue);
    }
    recursive([this.root]);
    return result;
  }

  // DFSPreOrder - Depth first search for pre order
  DFSPreOrder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.value);
    if (node.left) this.DFSPreOrder(node.left, result);
    if (node.right) this.DFSPreOrder(node.right, result);
    return result;
  }
}

const tree = new BreadthFirstSearch();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS(); //?
tree.DFSPreOrder(); //?

tree;
