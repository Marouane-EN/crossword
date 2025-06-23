import { duplication, checklength,checklines,validPuzzle,checkalpha } from "./utils.js";
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
  if(!checklines(puzzle)|| !validPuzzle(puzzle)){
    return "Eroror checklines or validpuzzle"
  }
  if (!checkalpha(words)){
    return "Error checkalpha"
  }
  return "dsdf";
}


const puzzle = `222
222`
const words = ['caa', 'alan', 'ciao', 'anta']

// function recursive(c){
//     if(c>10){
//         return ;
//     }
    
    
//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)