import BinarySearchTree from '../section22_binary_search_trees/Binary_Search_tree';

class BreadthFirstSearch extends BinarySearchTree {
  constructor() {
    super();
  }
}

const tree = new BreadthFirstSearch();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);

tree;
