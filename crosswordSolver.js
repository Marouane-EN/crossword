import { duplication, checklength } from "./utils.js";
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
  return "dsdf";
}



const puzzle = '2001\n0..0\n2000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
console.log(crosswordSolver(words, puzzle));
