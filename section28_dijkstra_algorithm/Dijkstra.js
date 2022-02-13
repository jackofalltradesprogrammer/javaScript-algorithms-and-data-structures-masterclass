import { PriorityQueue } from './PriorityQueue';
import { WeightedGraph } from './WeightedGraph';

class Dijkstra {
  constructor() {
    this.graph = new WeightedGraph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach(node => this.graph.addVertex(node));
    this.graph.addEdge('A', 'B', 4);
    this.graph.addEdge('A', 'C', 2);
    this.graph.addEdge('B', 'E', 3);
    this.graph.addEdge('C', 'D', 2);
    this.graph.addEdge('C', 'F', 4);
    this.graph.addEdge('D', 'E', 3);
    this.graph.addEdge('D', 'F', 1);
    this.graph.addEdge('E', 'F', 1);
  }

  findShortestPath(startVertex, endVertex) {}
}

const pathFinder = new Dijkstra();
pathFinder;
