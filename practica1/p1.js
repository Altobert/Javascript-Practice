
//Se crea nodo
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;  
  }
}

//Se crea la lista linkeada
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  //Se inserta un nodo
  insertNode(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  //Se imprime o muestra nodo
  print(){
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //Se borra un nodo
  deleteNode(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  }

  //Buscar un nodo
  findNode(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

//Sr crea la lista linkeada
const linkedList = new LinkedList();
linkedList.insertNode(12);
linkedList.insertNode(99);
linkedList.insertNode(37);

//Se imprimen todos los nodos
linkedList.print();

//Se busca el nodo que tenga el elemto 37
console.log(linkedList.findNode(37));