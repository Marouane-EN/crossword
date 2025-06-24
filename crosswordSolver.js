import {
  duplication,
  checklength,
  checklines,
  validPuzzle,
  checkalpha,
} from "./utils.js";

import { horizental, vertical } from "./puzzle.js"

function crosswordSolver(words, puzzle) {
  if (
    !Array.isArray(words) ||
    typeof puzzle !== "string" ||
    !duplication(words)
  ) {
    return "Error";
  }
  const joindWord = words.join("");
  if (!checklength(puzzle, words)) {
    return "Error";
  }
  if (!checklines(puzzle) || !validPuzzle(puzzle)) {
    return "Error";
  }
  if (!checkalpha(words)) {
    return "Error";
  }
  let grid = puzzle.split('\n').map(row => row.split(''));
  solvepuzzel(words, grid)
  return ''
}

export function solvepuzzel(words, puzzle) {
  const result = puzzle.map(row => [...row]);
  let Count = 0
  var r = [];
  function backtrack(index) {
    if (index === words.length) {
      Count++
      if (Count > 1) {
        return true
      }
      r = result.map(row => [...row]);
      return false; // all words placed successfully
    }

    const word = words[index];

    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle[0].length; col++) {
        if (!isNaN(puzzle[row][col]) && Number(puzzle[row][col]) > 0) {
          if (horizental(result[row], col, word)) {
            const backup = [...result[row]]; // save current row
            for (let i = 0; i < word.length; i++) {
              result[row][col + i] = word[i]
            }

            if (backtrack(index + 1)) return true;
            result[row] = backup; // backtrack
          }
          if (vertical(result, col, row, word)) {

            const backup = result.map(r => [...r]);
            for (let i = 0; i < word.length; i++) {
              result[row + i][col] = word[i]
            }
            if (backtrack(index + 1)) return true;
            for (let i = 0; i < result.length; i++) {
              result[i] = [...backup[i]];
            }
          }
        }
      }
    }
    return false;
  }
  // call backtrack starting from the first word !!
  backtrack(0); 

  if (Count === 0) {
    console.log("Error");
  } else if (Count === 1) {
    let row = 0
    while (row < r.length) {
    let col = 0
    while (col < r[0].length) {
         process.stdout.write(r[row][col]);
        col++;
      }
      if (row < r.length - 1) {
      process.stdout.write('\n');
      }
      row++;
    }

  } else {
    console.log("Error");
  }

}

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
console.log(crosswordSolver(words, puzzle))


