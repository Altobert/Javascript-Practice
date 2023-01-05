function Node (value) {
    this.value = value
    this.next = null
  }
  
  function LinkedList() {
    this.head = null
  }
  
  LinkedList.prototype.append = function(value, current = this.head){
    if(this.head === null){
      return this.head = new Node(value)
    }
    if(current.next === null){
      return current.next = new Node(value)
    }
    this.append(value, current.next)
  }
  
  LinkedList.prototype.prepend = function(value){
    if(this.head === null){
      return this.head = new Node(value)
    }
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }
  
  LinkedList.prototype.removeNode = function (value, current = this.head) {
    if(this.head === null){ // no head
      return false
    }
  
    if (this.head.value === value){
      return this.head = this.head.next
    }
  
    if(current.next !== null){
      if(current.next.value === value){
        return current.next = current.next.next
      }
      this.removeNode(value, current.next)
    }
    return false // no match found
  }
  
  LinkedList.prototype.findNode = function (value, current = this.head){
    if(this.head === null) {
      return false
    }
  
    if (current !== null) {
      if (current.value === value){
        return true
      } else {
        return this.findNode(value, current.next)
      }
    }
    return false
  }
  
  LinkedList.prototype.peekNode = function (value) {
    if(this.head === null) {
      return false
    }
    return this.head
  }
  
  LinkedList.prototype.length = function (current = this.head, acum = 1) {
    if(this.head === null){
      return 0
    }
    if (current.next !== null){
      return this.length(current.next, acum = acum + 1)
    }
    return acum
  }