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
  if (!checklength(puzzle,words)) {
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

function solvepuzzel(words, puzzle) {
  const result = puzzle.map(row => [...row]);
  let Count = 0
  let r
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

    return false; // no placement worked
  }
backtrack(0);

if (Count === 0) {
  console.log("No solution found.");
} else if (Count === 1) {
  console.log("Unique solution:");
  console.log(r.map(t => t.join("")).join("\n"));
  
} else {
  console.log("Error: Multiple solutions found.");
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
  //console.log(word);

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
  for (let i = row; i < grid.length; i++) {
    if (grid[i][col] == '.') {
      break
    }
    if (row > 0 && grid[row - 1][col] != '.') {
      //console.log("/////////", word);
      return false
    }
    if (!isNaN(grid[i][col])) {
      count++
    } else {
      if (grid[i][col] == word[i - row]) {
        count++
      } else {
        //  console.log("/////////", word);

        return false
      }

    }
  }
  // console.log("/////////", word,count);
  return count == word.length;
}
const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

console.log(crosswordSolver(words, puzzle))

// function recursive(c){
//     if(c>10){
//         return ;
//     }

//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)
