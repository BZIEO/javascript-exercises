const repeatString = function (str, num) {
  let rStr = "";
  if (num >= 0) {
    while (num > 0) {
      rStr += str;
      num--;
    }
    return rStr;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
