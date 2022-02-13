export class WeightedGraph {
  constructor() {
    this.adjacenyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacenyList[vertex1].push({ node: vertex2, weight });
    this.adjacenyList[vertex2].push({ node: vertex1, weight });
  }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');

weightedGraph.addEdge('A', 'B', 9);
weightedGraph.addEdge('A', 'C', 5);
weightedGraph.addEdge('B', 'C', 7);

weightedGraph;
