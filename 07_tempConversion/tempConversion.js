const ftoc = function (x) {
  let c = (x - 32) * (5 / 9);
  c = Math.round(c * 10) / 10;

  return c;
};

const ctof = function (y) {
  let f = y * 1.8 + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
