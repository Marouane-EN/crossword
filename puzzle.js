export function horizental(row, col, word) {
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

export function vertical(grid, col, row, word) {
  let count = 0;
  for (let i = row; i < grid.length; i++) {
    if (grid[i][col] == '.') {
      break
    }
    if (row > 0 && grid[row - 1][col] != '.') {
      return false
    }
    if (!isNaN(grid[i][col])) {
      count++
    } else {
      if (grid[i][col] == word[i - row]) {
        count++
      } else {
        return false
      }

    }
  }
  return count == word.length;
}