// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create nested array to hold results
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  // initialize variables to keep track of position
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // we will need 4 for loops to assemble each side of the matrix
    // 1st for loop to assemble top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // 2nd for loop to assemble rightmost col
    for (let j = startRow; j <= endRow; j++) {
      results[j][endCol] = counter;
      counter++;
    }
    endCol--;
    //3rd for loop to assemble bottom row
    for (let k = endCol; k >= startCol; k--) {
      results[endRow][k] = counter;
      counter++;
    }
    endRow--;
    //4th for loop to assemble leftmost col
    for (let l = endRow; l >= startRow; l--) {
      results[l][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
