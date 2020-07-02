// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // breadth first starts at top by iterating at every level of tree left to right
  traverseBF(fn) {
    const processing = [this.root];
    while (processing.length) {
      const node = processing.shift();
      processing.push(...node.children);
      fn(node);
    }
  }

  // start at root hit bottom of tree as quickly as possible
  traverseDF(fn) {
    const processing = [this.root];
    while (processing.length) {
      const node = processing.shift();
      processing.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
