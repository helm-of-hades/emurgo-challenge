// @flow

// Swap out these implementations for a good time!
// const combinator = require("./combinator-iterative.js");
const combinator = require("./combinator-recursive.js");

const solution1 = (
  str: string,
  slotChar: string = "*",
  slotOpts: any[] = [1, 0]
): string[] => {
  const numSlots = str.split(slotChar).length - 1;

  if (numSlots <= 0) return [str];

  const combos = combinator(numSlots, () => slotOpts);

  return combos.map((combo, idx) => {
    let res = str;

    combo.forEach(item => {
      res = res.replace(slotChar, item);
    });

    return res;
  });
};

const solution2 = (listOfLists: any[][]) => {
  return combinator(listOfLists.length, depth => listOfLists[depth]);
};

//  _____         _      ____
// |_   _|__  ___| |_   / ___|__ _ ___  ___  ___
//   | |/ _ \/ __| __| | |   / _` / __|/ _ \/ __|
//   | |  __/\__ \ |_  | |__| (_| \__ \  __/\__ \
//   |_|\___||___/\__|  \____\__,_|___/\___||___/

// Question 1
const testCase1 = "1*0*1";
const expectedRes = ["11011", "11001", "10011", "10001"];
const result1 = solution1(testCase1);

console.assert(
  expectedRes.length == result1.length,
  "Length of result does not match expected length"
);
expectedRes.forEach(item =>
  console.assert(
    result1.indexOf(item) >= 0,
    `Expected item [${item}] no found in result: ${JSON.stringify(result1)}`
  )
);

// Question 2
const testCase2 = [[1, 3], ["a"], [4, 5]];
const expectedRes2 = [[1, "a", 4], [1, "a", 5], [3, "a", 4], [3, "a", 5]];
const result2 = solution2(testCase2);

console.assert(
  JSON.stringify(result2) === JSON.stringify(expectedRes2),
  `Results did not match expected case!`
);

console.log("If this is the only output, test cases passed!");
