import { PriorityQueue } from './PriorityQueue';
import { WeightedGraph } from './WeightedGraph';

class Dijkstra {
  constructor() {
    this.graph = new WeightedGraph();
    this.queue = new PriorityQueue();
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

  findShortestPath(startVertex, endVertex) {
    // create an object "distances" and set every vertex except start to infinity
    // add each vertex with infinity to the priority queue
    // another object previous for each key and set to null
    const distances = {};
    const previous = {};
    for (let key in this.graph.adjacenyList) {
      previous[key] = null;
      if (key === startVertex) distances[key] = 0;
      else {
        distances[key] = Infinity;
      }
    }
    distances; //?
    this.queue.enqueue(startVertex, 0);
    previous;

    // Looping on priority Queue
    while (this.queue.values) {
      const vertex = this.queue.dequeue();
      const neighbors = this.graph.adjacenyList[vertex.val];
      neighbors; //?
      neighbors.forEach(({ node, weight }) => {
        const distance = distances[vertex.val] + weight;
        if (distance < distances[node]) {
          this.queue.enqueue(node, weight);
          distances[node] = distance;
          previous[node] = vertex.val;
        }
      });
      if (vertex.val === endVertex) {
        break;
      }
    }
    let vertex = endVertex;
    let path = endVertex;
    while (true) {
      if (vertex === startVertex) {
        break;
      }
      const previousVertex = previous[vertex];
      path = `${previousVertex} - ${path}`;
      vertex = previousVertex;
    }
    return path;
  }
}

const pathFinder = new Dijkstra();
pathFinder;

pathFinder.findShortestPath('A', 'E'); //?
