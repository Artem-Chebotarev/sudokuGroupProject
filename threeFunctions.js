const fs = require('fs');
const textPuzzle = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');
// console.log(textPuzzle);
let arrPrePuzzle = textPuzzle.split('\n')[0].split('')
let arrPuzzle = []
 for (let i = 0; i < arrPrePuzzle.length; i++) { 
      arrPuzzle.push(arrPrePuzzle.splice(0, 9))
 }
console.log(arrPuzzle)

const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const arr = [
  
  [1, '-', 5, 8, '-', 2, '-', '-', '-'],
  ['-', 9, '-', '-', 7, 6, 4, '-', 5],
  [2, '-', '-', 4, '-', '-', 8, 1, 9],
  ['-', 1, 9, '-', '-', 7, 3, '-', 6],
  [7, 6, 2, '-', 8, 3, '-', 9, '-'],
  ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
  ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
  [4, 3, '-', '-', 2, '-', 5, '-', 1],
  [6, '-', '-', 3, '-', 8, 9, '-', '-']
];

function searchRows(array, value = 0) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '-') {
      for (let j = 1; j < 10; j++) {
        if (!array.includes(j)) {
          array[i] = j;
          break;
        }
      }
    }
  }
  return array;
}
console.log(searchRows([2, '-', '-', 4, '-', '-', 8, 1, 9]));
