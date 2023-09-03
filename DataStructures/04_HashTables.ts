// Definicion de la clase HastTable con un tipo generico T
class HastTable<T> {
  private table: { [key: string]: T } = {};

  // Metodo para calcular el hash de una clave 
  private hash(key: string): string {
    return key.toString();  // En una tabla hash real, este método se encargaría de convertir la clave en una cadena hash que se utilizaría para buscar o almacenar valores en la tabla hash.
  }

  // Metodo para insertar un elemento
  insert(key: string, value: T): void {
    const hashedKey = this.hash(key);
    this.table[hashedKey] = value;
  }

  // Metodo para eliminar un elemento
  delete(key: string): void {
    const hashedKey = this.hash(key);
    delete this.table[hashedKey]
  }

  // Metodo para buscar un elemento
  search(key: string): T | null {
    const hashedKey = this.hash(key);
    return this.table[hashedKey] ?? null;  // `??` es el operador de coalescencia nula.
  }

  // Metodo para mostrar la tabla hash
  display(): void {
    console.log(this.table)
  }
}

// Uso de la tabla 
const hashTable = new HastTable<number>();
hashTable.insert('one', 1);
hashTable.insert('two', 2);
hashTable.insert('tree', 3);

hashTable.display(); // {one: 1, two: 2, three: 3}
console.log(hashTable.search('two')); // 2
hashTable.delete('two');
hashTable.display(); // {one: 1, tree: 3}
console.log(hashTable.search('two'))  // null

