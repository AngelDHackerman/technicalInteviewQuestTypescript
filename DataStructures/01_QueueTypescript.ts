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
}