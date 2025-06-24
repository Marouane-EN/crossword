import {
  duplication,
  checklength,
  checklines,
  validPuzzle,
  checkalpha,
} from "./utils.js";
function crosswordSolver(words, puzzle) {
  if (
    !Array.isArray(words) ||
    typeof puzzle !== "string" ||
    !duplication(words)
  ) {
    return "Error";
  }
  const joindWord = words.join("");
  console.log("join", joindWord.length);
  console.log("length", checklength(puzzle));
  if (checklength(puzzle) !== joindWord.length) {
    return "Error length";
  }
  if (!checklines(puzzle) || !validPuzzle(puzzle)) {
    return "Eroror checklines or validpuzzle";
  }
  if (!checkalpha(words)) {
    return "Error checkalpha";
  }
  return "dsdf";
}
function solver(matrix, solved, words, index, row, col) {
  if (!isNaN(matrix[row][col])) {
    let num = Number(matrix[row][col]);
    if (num > 0) {
      num = num - 1;
      matrix[row][col] = String(num);
      if (horizental(matrix[row], col, words[index])) {
      }
    }
  }
}

function horizental(row, col, word) {
  let count = 0;
  for (let i = col; i < row.length; i++) {
    if (row[i] == ".") {
      break;
    }
    if (col > 0 && row[col - 1] != ".") {
      return false;
    }
    if (count == word.length && (i != row.length - 1 || row[i + 1] != ".")) {
      return false;
    }
    if (!isNaN(row[i])) {
      count++;
    } else {
      if (row[i] == word[i]) {
        count++;
      } else {
        return false;
      }
    }
  }
  return count == word.length;
}

const puzzle = `222
222`;
const words = ["caa", "alan", "ciao", "anta"];

// function recursive(c){
//     if(c>10){
//         return ;
//     }

//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)
