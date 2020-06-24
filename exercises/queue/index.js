// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// In JS we can implement a queue as restricted array
class Queue {
  constructor() {
    this.data = [];
  }
  add(value) {
    this.data.unshift(value);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

// Or we can implement it as a linked list where we add to the tail and remove from the head
// Queue are great for insertion and removal when implemented as a linked list time complexity is O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue2 {
  constructor() {
    this.first = null; // head
    this.last = null; // tail
    this.size;
  }
  // add to end
  enqueue(value) {
    let newNode = newNode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // move the current last up in line
      this.last.next = newNode;
      // set last pointer to newNode
      this.last = newNode;
    }
    return ++this.size;
  }
  // remove from the beginning
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let removed = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return removed;
    }
  }
}

module.exports = Queue;
