
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

