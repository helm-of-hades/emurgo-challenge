// @flow

const combinator = (
  numSlots: number,
  getOptions: (depth: number) => Array<any>
): any[] => {
  let res: any[] = [];

  const runner = (depth: number, currentCombo: any[]): void => {
    if (depth === numSlots) {
      res.push(currentCombo);
      return;
    }

    getOptions(depth).forEach(opt =>
      runner(depth + 1, currentCombo.concat(opt))
    );
  };

  runner(0, []);

  return res;
};

module.exports = combinator;
