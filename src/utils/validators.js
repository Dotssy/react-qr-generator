export const filterNumbers = (val) => {
  const regexp = new RegExp(/^[0-9]+$/);
  return regexp.test(val);
};
