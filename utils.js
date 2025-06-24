//------------- check if word is duplicated
export function duplication(words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        return false;
      }
    }
  }
  return true;
}



//---------- check if empty spaces match the length of our words
export function checklength(puzzle, words) {
  const grid = puzzle.split('\n').map(row => row.split(''));

  let startCells = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const cell = grid[row][col];
      if (!isNaN(cell) && Number(cell) > 0) {
        startCells += Number(cell);
      }
    }
  }

  if (startCells !== words.length) {
    return false
  }
  return true
}


//----------- check if every line is in the same length
export function checklines(puzzle) {
  let splitedpuzzle = puzzle.split('\n')
  //console.log(splitedpuzzle);
  for (let i = 0; i < splitedpuzzle.length; i++) {
    let fixedlength = splitedpuzzle[0].length
    if (splitedpuzzle[i].length != fixedlength) {
      return false
    }
  }
  return true
}
//-------- check if there is only valid characters
export function validPuzzle(puzzle) {
  const validChars = ["0", "1", "2", ".", "\n"];
  for (let i = 0; i < puzzle.length; i++) {
    if (!validChars.includes(puzzle[i])) {
      return false;
    }
  }
  return true;
}
//----------- check if there is only aplha lowercasse letters
export function checkalpha(words) {
  let joined = words.join('')
  for (let i = 0; i < joined.length; i++) {
    if (joined[i] < 'a' || joined[i] > 'z') {
      return false
    }
  }
  return true
}