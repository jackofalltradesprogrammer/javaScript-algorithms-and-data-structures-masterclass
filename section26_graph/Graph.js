class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  // addVertex(vertex) to the graph
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph;
