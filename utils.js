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
export function checklength(puzzle) {
  let count = 0;
  const regx = /\d+/g;
  const result = puzzle.match(regx);
  let r = result.join("");
  r = r.split("");
  for (let i = 0; i < r.length; i++) {
    if (Number(r[i]) === 0) {
      count++;
      continue;
    }
    if (Number(r[i]) > 2) {
      return -1
    }
    count += Number(r[i]) + 1;
  }
  return count;
}


//----------- check if every line is in the same length
export function checklines(puzzle){
  let splitedpuzzle = puzzle.split('\n')
  console.log(splitedpuzzle);
  for (let i = 0 ; i < splitedpuzzle.length ;  i ++){
    let fixedlength = splitedpuzzle[0].length
    if (splitedpuzzle[i].length != fixedlength){
      return false
    }
  }
  return true
}
