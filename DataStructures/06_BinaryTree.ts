// Definicion de la clase Node para el arbol binario

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) { 
    this.value = value;
  }
}

// Definicion de la clase BinaryTree
class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  // Metodo para insertar un nodo
  insert (value: T): void {
    const newNode = new TreeNode(value);
    if (this.root === null) { 
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) { 
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) { 
          current.right = newNode;
          return;
        }
        current = current.right
      }
    }
  }

  // Metodo para buscar un nodo
  search(value: T): TreeNode<T> | null {
    let current = this.root;
    while (current !== null ) { 
      if (current.value === value) {
        return current;
      } else if (value < current.value) { 
        current = current.left;
      } else { 
        current = current.right;
      }
    }
    return null;
  }
}

// Uso del arbol binario
const binaryTree = new BinaryTree<number>();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);

console.log(binaryTree.search(7))  // TreeNode {value: 7, left: null, right: null}
console.log(binaryTree.search(100))  // null