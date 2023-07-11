/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let horizontal = [];
  let vertical = [];
  let threeByThree = [];

  let cases = [horizontal, vertical, threeByThree];
  let casesSets = [];

  //Identifying areas that are expected to have values without repetition
  board.forEach((v) => {
    horizontal.push(v);
  }); //horizontal lines
  createVerticalLines(board, vertical); //vertical lines
  allthreeByThree(horizontal, threeByThree); //3x3

  //creating sets of unique values of each array (excluding dots if applicable)
  cases.forEach((cs) => {
    casesSets.push(createSetsOfUniqueValuesWithoutDot(cs));
  });

  //removing dots from all arrays to only have values
  cases.forEach(removeDotsForAllArr);

  //comparing the size of set of unique values to the length of arrays that only consist with values
  return compareNumsLengthToSetSize(cases, casesSets);
};

function createVerticalLines(arr, pushToArr) {
  let tempArr = [];
  for (let i = 0; i < 9; i++) {
    tempArr = [];
    for (let j = 0; j < 9; j++) {
      tempArr.push(arr[j][i]);
    }
    pushToArr.push(tempArr);
  }
}

function allthreeByThree(horizontal, pushToArr) {
  let maxStartIndex = 6;
  let linesPerSquare = 3;

  for (let i = 0; i <= maxStartIndex; i += linesPerSquare) {
    for (let j = 0; j <= maxStartIndex; j += linesPerSquare) {
      pushToArr.push(makeThreeByThree(j, i, horizontal));
    }
  }
}

function makeThreeByThree(line, startIndex, arr) {
  let tempArr = [];
  for (let i = line; i < 3 + line; i++) {
    for (let j = startIndex; j < 3 + startIndex; j++) {
      tempArr.push(arr[i][j]);
    }
  }
  return tempArr;
}

function removeDotsForAllArr(arrayOfArrays) {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    arrayOfArrays[i] = arrayOfArrays[i].filter((v) => {
      return v !== ".";
    });
  }
}

function createSetsOfUniqueValuesWithoutDot(arrayOfArrays) {
  let tempArr = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    tempArr.push(new Set(arrayOfArrays[i]));
    if (tempArr[i].has(".")) {
      tempArr[i].delete(".");
    }
  }
  return tempArr;
}

function compareNumsLengthToSetSize(cases, casesSet) {
  let bool;

  for (let i = 0; i < cases.length; i++) {
    for (let j = 0; j < cases[i].length; j++) {
      bool = cases[i][j].length === casesSet[i][j].size;
      if (bool === false) {
        return false;
      }
    }
  }
  return true;
}

let case1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; //expected: true

let case2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; //expected: false

console.log(isValidSudoku(case1));
console.log(isValidSudoku(case2));
