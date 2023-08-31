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
      current.next = newNode;
    }

    // Insertar al inicio 
    prepend(value: T): void { 
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }

    // Eliminar un nodo por valor
    delete(value: T): void { 
      if (this.head === null) return;

      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }

      let current = this.head;
      while (current.next !== null) { 
        if (current.next.value === value) { 
          current.next = current.next.next;
          return;
        }
        current = current.next
      }
    }

    // Recorrer la lista
    traverse(): void {
      let current = this.head;
      while (current !== null) { 
        console.log(current.value);
        current = current.next;
      }
    }
  }
}

// Uso de la lista enlazada
const linkedList = new MyLinkedList.LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(0);
linkedList.traverse(); // Output: 0 1 2 3
linkedList.delete(2);
linkedList.traverse(); // Output: 0 1 3