// A queue es like: LIFO (Last in, First out) like a stack of books 

class Stack<T> { 
  private items: T[];

  constructor() { 
    this.items = [];
  }

  // Agregar un elemento al top de la pila
  push(element: T): void { 
    this.items.push(element)
  }

  // Eliminar un elemento del tope de la pila 
  pop(): T | undefined { 
    return this.items.pop()
  }

  // Obtener el elemento del tope sin eliminarlo
  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  // Verificar si la pila esta vacia
  isEmpty(): boolean { 
    return this.items.length === 0
  }

  // Obtener el tamaño de la pila
  size(): number {
    return this.items.length
  }

}