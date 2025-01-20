export const countFilledFields = (fields) => {
  let numberFilled = 0;

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].length) {
      numberFilled++;
    }
  }

  return numberFilled;
};
