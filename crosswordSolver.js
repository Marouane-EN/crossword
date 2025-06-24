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
  // shallow copy second grid which will contain result 
  let result = p.map(ss => ([...ss]))
  console.log("-------------", result)

  while (row < p.length) {
    while (col < p[0].length) {
      let tmp = p[row][col];
      let k = 0;
      let detect = 0;

      while (k < word.length) {
        if (!isNaN(tmp)) {
          if (tmp > 0) {
            console.log("at wordsd")
            console.log(word[k], row, col)
            console.log("at words")
            if (horizental(result[row], col, word[k])) {
              console.log("true")
              let n = 0
              let r = word[k].split("")
              console.log(r)
              //  check if there is matching
              // console.log("-------------------------im at check>")
              while (n < r.length) {
                result[row][col + n] = r[n]
                n++
              }
              detect++
              console.log("result", result);

              //console.log("--------------------------im at check>")
            } else if (vertical(result, col, row, word[k])) {
              //console.log("dsfdfs");
              let r = word[k].split("")
              console.log(r)
              let n = 0
              while (n < r.length) {
                result[row + n][col] = r[n]
                n++
              }
              console.log("result", result);
              detect++
            }
          }
        }
        k++
      }
      col++
    }
    row++
    col = 0
  }


  console.log(result.map(r => r.join('')).join('\n'))
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
  for (let i = row; i < grid.length; i++) {
    if (grid[i][col] == '.') {casa
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
const puzzle = `2001
0..0
1000
0..0`

const words = ['casa', 'anta', 'alan', 'ciao']


console.log(crosswordSolver(words, puzzle))

// function recursive(c){
//     if(c>10){
//         return ;
//     }

//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)
