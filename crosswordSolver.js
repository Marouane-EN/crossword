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
  //console.log("join", joindWord.length);
  //console.log("length", checklength(puzzle));
  if (checklength(puzzle) !== joindWord.length) {
    return "Error length";
  }
  if (!checklines(puzzle) || !validPuzzle(puzzle)) {
    return "Eroror checklines or validpuzzle";
  }
  if (!checkalpha(words)) {
    return "Error checkalpha";
  }
  let grid = puzzle.split('\n').map(row => row.split(''));

  solvepuzzel(words, grid)
  return "finish";
}

function solvepuzzel(word, p) {
  console.log("at solver ")
  console.log(word)
  console.log(p)
  let col = 0
  let row = 0
  // shalow copy seconde grid who will contain result 
  let reuslt = p.map(row => ([...row]))
  // ---------------------->
  console.log("-------------", reuslt)

  while (col < p[0].length) {
    while (row < p.length) {
      // console.log(typeof(p[i][row]))
      let tmp = p[col][row];
      //console.log(tmp > 0)
      if (!isNaN(tmp)) {
        if (tmp > 0) {
          if (horizental(reuslt[row], col, word)) {
            console.log("true")

          } else if (vertical(p, col, row, word)) {
            console.log("dsfdfs");
            
          } 
        }
      }
      row++
    }
    col++
    row = 0
  }
}

function solver(matrix, solved, words, index, row, col) {
  if (!isNaN(matrix[row][col])) {
    let num = Number(matrix[row][col]);
    if (num > 0) {
      num = num - 1;
      matrix[row][col] = String(num);
      if (horizental(matrix[row], col, words[index])) {
        console.log()
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
    if (!isNaN(row[i])) {
      count++;
    } else {
      if (row[i] == word[i - col]) {
        count++;
      } else {
        return false;
      }
    }
  }
  return count == word.length;
}
function vertical(grid, col, row, word) {
  let count = 0;
  for (let i = col; i < grid.length; i++) {
    if (grid[i][row] == '.') {
      break
    }
    if (col > 0 && grid[col - 1][row] != '.') {
      return false
    }
    if (!isNaN(grid[i][row])) {
      count++
    } else {
      if (grid[i][row] == word[i - col]) {
        count++
      } else {
        return false
      }

    }
  }
  return count == word.length;
}
const puzzle = `2001
0..0
1000
0..0`

const words = ['casa', 'alan', 'ciao', 'anta']


console.log(crosswordSolver(words, puzzle))

// function recursive(c){
//     if(c>10){
//         return ;
//     }

//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)
