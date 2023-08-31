// Needed to create a namespace because "Node" is already declared in the global environment of typescript, specifically in `lib.dom.d.ts`

namespace MyLinkedList {
  // Definicion del nodo
  export class Node<T> {
    value: T
    next: Node<T> | null = null

    constructor(value: T) {
      this.value = value
    }
  }

  // Definicion de la lista enlazada
  export class LinkedList<T> {
    head: Node<T> | null = null

    // Insertar al final
    append(value: T): void {
      const newNode = new Node(value)
      if (this.head === null) { 
        this.head = newNode;
        return;
      }

      let current = this.head;
      while (current.next !== null) { 
        current = current.next;
      }
      current.next = newNode
    }
  }

}