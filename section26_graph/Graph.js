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

  // removeEdge(vertex1, vertex2) remove corresponding edges for both the vertices
  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      edge => edge !== vertex2,
    );
    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      edge => edge !== vertex1,
    );
  }

  // removeVertex(vertex) - removes the vertex from the adjacenyList and the corresponding edges
  removeVertex(vertex) {
    // make sure it exists
    const vertexEdges = this.adjacenyList[vertex];
    for (let v of vertexEdges) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacenyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph.removeEdge('Dallas', 'Aspen');
graph.removeVertex('Dallas');
graph;
