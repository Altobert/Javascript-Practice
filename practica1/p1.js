
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;  
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
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

  print(){
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

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

const linkedList = new LinkedList();
linkedList.insertNode(12);
linkedList.insertNode(99);
linkedList.insertNode(37);
linkedList.print();
console.log(linkedList.findNode(37));