import { duplication, checklength,checklines,validPuzzle } from "./utils.js";
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
  return "dsdf";
}


const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['caa', 'alan', 'ciao', 'anta']
console.log(validPuzzle(puzzle));
// console.log(crosswordSolver(words,puzzle));
  //
// function recursive(c){
//     if(c>10){
//         return ;
//     }
    
    
//     recursive(c+1)
//     console.log(c);
// }

// recursive(0)