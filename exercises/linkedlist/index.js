// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// linked list only knows about the first node aka the head
class LinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
    // this.size = 0;
  }

  insertFirst(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }
  // return number of nodes in a linked list
  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let current = this.head.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return;
  }

  insertLast(value) {
    if (!this.head) {
      this.head = new Node(value);
    }
    // let current = this.head;
    // while (current.next) {
    //   current = current.next;
    // }
    let last = this.getLast();
    last.next = new Node(value);
  }

  getAt(index) {
    let current = this.head;
    if (!current) {
      return null;
    }
    let i = 0;
    while (i <= index) {
      current = current.next;
      i++;
    }
    return current;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.removeFirst();
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
