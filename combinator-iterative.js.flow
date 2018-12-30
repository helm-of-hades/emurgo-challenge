// @flow

const removeItemFromEndOfArray = (_list: T[]): T[] => {
  const list = _list.slice();
  list.splice(-1);
  return list;
};

const incrementTablePointers = (_table: any[][], _pointers: number[]) => {
  const table = _table.slice();
  const pointers = _pointers.slice();

  if (!table.length) return [];

  const finalRowPointer = pointers[table.length - 1];
  // Increment the pointer
  const newPointer = finalRowPointer + 1;
  // Get last row's length
  const finalRowLength = table[table.length - 1].length;
  // Check if pointer OutOfBounds
  const newPointerIsOutOfBounds = newPointer > finalRowLength - 1;
  // If OutOfBounds - reset pointer to 0 and increment everything above current row
  if (newPointerIsOutOfBounds) {
    // reset current row to 0
    pointers[table.length - 1] = 0;
    // and increment everything above current row
    const newTable = removeItemFromEndOfArray(table);
    const newPointers = removeItemFromEndOfArray(pointers);
    // Note: Technically, the approach used here to increment the table pointers
    // isn't being done "in-place".
    // I hate thinking about things mutatively & thought this was enough to get the idea across.

    // If you'd prefer I redo this with loops and mutations etc, I will totally do that.
    return incrementTablePointers(newTable, newPointers).concat(
      pointers[table.length - 1]
    );
  } else {
    // Otherwise - assign new value and return pointers
    pointers[table.length - 1] = newPointer;
    return pointers;
  }
};

//  _____         _      ____
// |_   _|__  ___| |_   / ___|__ _ ___  ___  ___
//   | |/ _ \/ __| __| | |   / _` / __|/ _ \/ __|
//   | |  __/\__ \ |_  | |__| (_| \__ \  __/\__ \
//   |_|\___||___/\__|  \____\__,_|___/\___||___/ for the table util

const expected1 = [0, 0, 0, 1, 0];
const testCase1 = () => {
  let pointers = [0, 0, 0, 0, 0];
  new Array(3).fill(null).forEach(() => {
    pointers = incrementTablePointers(
      [
        ["0", "1", "2"],
        ["0", "1", "2"],
        ["0", "1", "2"],
        ["0", "1", "2"],
        ["0", "1", "2"]
      ],
      pointers
    );
  });
  return pointers;
};

console.assert(
  JSON.stringify(testCase1()) === JSON.stringify(expected1),
  `Failed to increment the pointers: ${JSON.stringify(testCase1())}`
);

const expected2 = [0, 0];
const testCase2 = () => {
  let pointers = [0, 0];
  new Array(4).fill(null).forEach(() => {
    pointers = incrementTablePointers([["0", "1"], ["0", "1"]], pointers);
  });
  return pointers;
};

console.assert(
  JSON.stringify(testCase2()) === JSON.stringify(expected2),
  `Failed to reset the table: ${JSON.stringify(testCase2())}`
);

const combinator = (
  numSlots: number,
  getOptions: (depth: number) => Array<any>
): any[] => {
  let res = [];
  // Build a 2d array of all the options
  // Note: This assumes that the options are not prone to
  // mutation/changes and will always be the same depending on the "depth"
  let table = new Array(numSlots)
    .fill(null)
    .map((nothing, idx) => getOptions(idx));

  // Build a set of pointers to table indices
  let currentPointers = table.map(() => 0);
  let firstRowIndex;
  let tableHasNotReset = true;
  let lastRowIndex = 0;

  while (tableHasNotReset) {
    // build current perm/combo ("permbo?") from pointers
    const newPermbo = currentPointers.map((p, idx) => table[idx][p]);

    res.push(newPermbo);

    currentPointers = incrementTablePointers(table, currentPointers);
    tableHasNotReset = currentPointers.some(p => p !== 0);
  }

  return res;
};

module.exports = combinator;
