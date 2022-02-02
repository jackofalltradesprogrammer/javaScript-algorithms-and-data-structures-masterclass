import BinarySearchTree from '../section22_binary_search_trees/Binary_Search_tree';

class BreadthFirstSearch extends BinarySearchTree {
  constructor() {
    super();
  }

  //BFS() - Implement Breadth first search
  BFS() {
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
}

const tree = new BreadthFirstSearch();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS(); //?

tree;
