import { duplication, checklength,checklines } from "./utils.js";
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
  if(!checklines(puzzle)){
    return "Eroror checklines"
  }
  return "dsdf";
}

export function validPuzzle(puzzle) {
    const validChars = ["0", "1", "2", ".","\n"];
    for (let i = 0; i < puzzle.length; i++) {
        if (!validChars.includes(puzzle[i])) {
            return false;
        }
    }
    return true;
}

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['caa', 'alan', 'ciao', 'anta']
console.log(validPuzzle(puzzle));
// console.log(crosswordSolver(words,puzzle));
  
// function recursive(c){
//     if(c>10){
//         return ;
//     }
    
    
//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)