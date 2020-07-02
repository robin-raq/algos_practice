// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let processing = [root, "s"];
  let counters = [0];
  // let i = 0;
  while (processing.length > 1) {
    let node = processing.shift();
    if (node !== "s") {
      processing.push(...node.children);
      counters[counters.length - 1] += 1;
    } else {
      counters.push(0);
      processing.push("s");
    }
  }
  return counters;
}

module.exports = levelWidth;
