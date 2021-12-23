import React from "react";
import useSudokuSolver from "../utils/useSudokuSolver";
import Grid from "./Grid";
const input = `0 4 0 0 0 0 1 7 9
0 0 2 0 0 8 0 5 4
0 0 6 0 0 5 0 0 8
0 8 0 0 7 0 9 1 0
0 5 0 0 9 0 0 3 0
0 1 9 0 6 0 0 4 0
3 0 0 4 0 0 7 0 0
5 7 0 1 0 0 2 0 0
9 2 8 0 0 0 0 6 0`;

const input2 = `6 4 3 2 5 7 1 9 8
8 1 5 9 6 3 4 7 2
0 9 7 8 0 1 6 5 3
7 3 8 0 2 5 9 4 6
5 6 4 3 9 8 7 2 1
1 2 0 6 7 4 8 3 5
4 7 2 0 1 6 3 8 9
9 8 6 7 3 2 0 0 4
0 5 1 4 0 9 2 6 9`;

const Sudoku = () => {
  const { state, solver } = useSudokuSolver(input2);
  return (
    <>
      <h1> Backtracker </h1>
      <Grid arr={state} />
      <button onClick={() => solver(state)}>Solve</button>
    </>
  );
};

export default Sudoku;
