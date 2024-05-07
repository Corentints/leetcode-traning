function exist(board: string[][], word: string): boolean {
  let exists = false;

  const dfs = (row: number, column: number, currentIndex: number) => {
    if (currentIndex === word.length) {
      exists = true;
      return;
    }

    if (row >= board.length || column >= board[0].length || row < 0 || column < 0 || board[row][column] !== word[currentIndex]) {
        return;
    }


    const temp = board[row][column];
    board[row][column] = '';
    
    dfs(row + 1, column, currentIndex + 1);
    dfs(row, column + 1, currentIndex + 1);
    dfs(row - 1, column, currentIndex + 1);
    dfs(row, column - 1, currentIndex + 1);
    
    board[row][column] = temp;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, 0);
    }
  }

  return exists;
}
