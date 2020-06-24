// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// build as a restricted array
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
// can also be implemented as a linked list where we add and remove from the beginning
class Stack2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return removed;
    this.size--;
  }

  peek() {}
}
module.exports = Stack;
