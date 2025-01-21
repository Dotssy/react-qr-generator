export const filterNumbers = (val) => {
  const pattern = new RegExp(/^[0-9]+$/);
  return pattern.test(val);
};

export const isUrlValid = (url) => {
  const ip =
    '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}';
  const protocol = '(?:http(s?)://)?';
  const auth = '(?:\\S+(?::\\S*)?@)?';
  const host = '(?:(?:[a-z\\u00a1-\\uffff0-9_]-*)*[a-z\\u00a1-\\uffff0-9]+)';
  const domain =
    '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
  const tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?';
  const port = '(?::\\d{2,5})?';
  const path = '(?:[/?#][^\\s"]*)?';
  const pattern =
    '(?:' +
    protocol +
    '|www\\.)' +
    auth +
    '(?:localhost|' +
    ip +
    '|' +
    host +
    domain +
    tld +
    ')' +
    port +
    path;

  return new RegExp(pattern, 'ig').test(url);
};

export const isEmailValid = (email) => {
  const pattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return pattern.test(email);
};
