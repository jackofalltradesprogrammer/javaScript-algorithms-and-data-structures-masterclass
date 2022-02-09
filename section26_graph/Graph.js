class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  // addVertex(vertex) to the graph
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }

  // addEdge(vertex1, vertex2) add corresponding edges for both the vertices
  addEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  }
}

const graph = new Graph();
graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph;
