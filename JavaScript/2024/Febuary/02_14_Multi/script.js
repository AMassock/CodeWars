function multiply(number) {
  //your code here
  let numStr = number.toString();
  let numLength = numStr.length;

  if (number <= -1) {
    return number * 5 ** (numLength - 1);
  }

  return number * 5 ** numLength;
}

// return numLength <= -1 ? expr ** (numLength - 1) : expr ** numLength
// return number * Math.pow(5, Math.abs(number).toString().length);
