import React from "react";

function useSudokuSolver(initState) {
  // question
  initState = initState.split("\n").map(row => row.split(" ").map(Number));
  const [state, setState] = React.useState(initState);

  function findGrid(row, col) {
    // 1
    if (row >= 0 && row < 3 && col >= 0 && col < 3) {
      return 1;
    }
    // 2
    if (row >= 0 && row < 3 && col >= 3 && col < 6) {
      return 2;
    }
    // 3
    if (row >= 0 && row < 3 && col >= 6 && col < 9) {
      return 3;
    }
    // 4
    if (row >= 3 && row < 6 && col >= 0 && col < 3) {
      return 4;
    }
    // 5
    if (row >= 3 && row < 6 && col >= 3 && col < 6) {
      return 5;
    }
    // 6
    if (row >= 3 && row < 6 && col >= 6 && col < 9) {
      return 6;
    }
    // 7
    if (row >= 6 && row < 9 && col >= 0 && col < 3) {
      return 7;
    }
    // 8
    if (row >= 6 && row < 9 && col >= 3 && col < 6) {
      return 8;
    }
    // 9
    if (row >= 6 && row < 9 && col >= 6 && col < 9) {
      return 9;
    }
  }

  function validatePosition(arr, row, col, num) {
    // check duplicates in row
    {
      let count = 0;
      for (let i = 0; i < 9; i++) {
        if (arr[row][i] === num) {
          count++;
        }
        if (count > 1) {
          return false;
        }
      }
    }
    // check duplicates in col
    {
      let count = 0;
      for (let i = 0; i < 9; i++) {
        if (arr[i][col] === num) {
          count++;
        }
        if (count > 1) {
          return false;
        }
      }
    }
    // check grid
    {
      let grid = findGrid(row, col);
      let flat = arr.flat();
      let gridArr = [];
      for (let i = 0; i < 9; i++) {
        gridArr[i] =
          flat[
            (i % 3) +
              Math.floor(i / 3) * 9 +
              3 * (grid - 1) +
              (Math.ceil(grid / 3) - 1) * 18
          ];
      }
      let count = 0;
      for (let i = 0; i < gridArr.length; i++) {
        if (gridArr[i] === num) {
          count++;
        }
        if (count > 1) {
          return false;
        }
      }
    }
    return true;
  }
  function sleep(ms) {
    return new Promise((res, rej) => {
      setTimeout(res, ms);
    });
  }

  async function solver(arr, num = 1, row = 0, col = 0) {
    // end of column, if invalid col, move to next row
    if (col === 9) {
      row += 1;
      col = 0;
    }
    // end of sudoku
    if (row === 9) {
      return arr;
    }
    // if value is not 0, move to next col
    if (arr[row][col]) {
      return await solver(arr, 1, row, col + 1);
    }
    for (let i = num; i < 10; i++) {
      arr[row][col] = i;
      await sleep(10);
      setState([...arr]);
      if (validatePosition(arr, row, col, i)) {
        if (await solver(arr, 1, row, col + 1)) {
          return true;
        }
      }
    }
    arr[row][col] = 0;
    setState([...arr]);
    await sleep(10);
    return false;
  }
  return { state, solver };
}

export default useSudokuSolver;
