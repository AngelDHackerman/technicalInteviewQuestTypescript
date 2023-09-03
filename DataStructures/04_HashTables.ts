// Definicion de la clase HastTable con un tipo generico T
class HastTable<T> {
  private table: { [key: string]: T } = {};

  // Metodo para calcular el hash de una clave 
  private hash(key: string): string {
    return key.toString();
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
    return this.table[hashedKey] ?? null;
  }

  // Metodo para mostrar la tabla hash
  display(): void {
    console.log(this.table)
  }
}