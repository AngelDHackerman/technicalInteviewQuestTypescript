// Estructura de datos de grafo en TypeScript, incluyendo métodos para búsqueda en profundidad (DFS) y búsqueda en anchura (BFS).

// Definicion de la clase Graph
class Graph<T> {
  private adjacencyList: Map<T, T[]> = new Map();

  // Metodo para agregar un vertice al grafo
  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) { 
      this.adjacencyList.set(vertex, []);
    }
  }

  // Metodo para agregar una arista entre dos vertices
  addEdge(vertex1: T, vertex2: T):void { 
    this.adjacencyList.get(vertex1)?.push(vertex2)
    this.adjacencyList.get(vertex2)?.push(vertex1)
  }

  // Metodo para busqueda en profundidad (DFS)
  depthFirstSearch(start: T): T[] {
    const result: T[] = [];
    const visited: Set<T> = new Set();
    const adjacencyList = this.adjacencyList;

    function dfs(vertex: T): void {
      if (!vertex) return;
      visited.add(vertex);
      result.push(vertex);
      adjacencyList.get(vertex)?.forEach(neighbor => { 
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    }

    dfs(start);
    return result;
  }

  // Metodo para busqueda en anchura (BFS)
  breadthFirstSearch(start: T): T[] {
    const queue: T[] = [start];
    const result: T[] = [];
    const visited: Set<T> = new Set();
    visited.add(start);

    while (queue.length) { 
      const vertex = queue.shift()!;
      result.push(vertex);

      this.adjacencyList.get(vertex)?.forEach(neighbor => {
        if (!visited.has(neighbor)) { 
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Uso del grafo 
const graph = new Graph<number>();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 4);

console.log(graph.depthFirstSearch(1)); // [1, 2, 3, 4]
console.log(graph.breadthFirstSearch(1)); // [1, 2, 4, 3]

