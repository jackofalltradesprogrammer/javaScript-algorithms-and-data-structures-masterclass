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

  depthFirstRecursive(vertex, visited = {}, result = []) {
    if (!vertex && !this.adjacenyList[vertex]) return result;
    result.push(vertex);
    visited[vertex] = true;
    for (let neighbor of this.adjacenyList[vertex]) {
      if (!visited[neighbor]) {
        this.depthFirstRecursive(neighbor, visited, result);
      }
    }
    return result;
  }

  dfsIterative(vertex, visited = {}, result = []) {
    const stack = [vertex];
    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacenyList[vertex].forEach(neighbor => stack.push(neighbor));
      }
    }
    return result;
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

const graphDFS = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graphDFS.addVertex(v));
graphDFS.addEdge('A', 'B');
graphDFS.addEdge('A', 'C');
graphDFS.addEdge('B', 'D');
graphDFS.addEdge('C', 'E');
graphDFS.addEdge('D', 'E');
graphDFS.addEdge('D', 'F');
graphDFS.addEdge('E', 'F');
graphDFS.depthFirstRecursive('A'); //?
graphDFS.dfsIterative('A'); //?

graphDFS;
