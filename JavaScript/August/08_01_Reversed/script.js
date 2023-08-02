function solution(str) {
  toArray = str.split("");
  reverse = toArray.reverse();
  newStr = reverse.join("");
  return newStr;
}
