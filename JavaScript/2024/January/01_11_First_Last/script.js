function removeChar(str) {
  //You got this!
  let strArr = str.split("");
  strArr.shift();
  strArr.pop();

  let newStr = strArr.join("");

  return newStr;
}
