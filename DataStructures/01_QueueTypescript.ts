// A queue es like: FIFO (First in, First out) like a queue of persons

class Queue<T>{
  private items: T[];

  constructor() { 
    this.items = [];
  }

  // Agregar un elemento al final de la cola 
  enqueue(element: T): void { 
    this.items.push(element)
  }

  // Eliminar un elemento del frente de la cola
  dequeue(): T | undefined { 
    return this.items.shift();
  }

  // Obtener el elemento del frente sin eliminarlo
  front(): T | undefined { 
    return this.items[0]
  }

  // Verificar si la cola esta vacia
  isEmpty(): boolean { 
    return this.items.length === 0;
  }

  // Obtener el tamaño de la cola
  size(): number { 
    return this.items.length;
  }
}


// Usando la cola
const queue = new Queue<number>();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue)

console.log(queue.dequeue())  // 1 (deleted)
console.log(queue.front())  // 2
console.log(queue.isEmpty())  // false
console.log(queue.size())  // 2