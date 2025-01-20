export const makeDashedNumber = (val) => {
  let dashedNumber =
    val.slice(0, 3) +
    '-' +
    val.slice(3, 5) +
    '-' +
    val.slice(5, 7) +
    '-' +
    val.slice(7);

  if (dashedNumber[dashedNumber.length - 1] === '-' && val.length <= 5) {
    dashedNumber = dashedNumber.slice(0, dashedNumber.length - 2);
  }

  if (dashedNumber[dashedNumber.length - 1] === '-') {
    dashedNumber = dashedNumber.slice(0, dashedNumber.length - 1);
  }

  return dashedNumber;
};
