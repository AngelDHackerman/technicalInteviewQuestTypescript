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
}