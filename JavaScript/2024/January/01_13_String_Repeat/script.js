function repeatStr(n, s) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(s);
  }
  let newArr = arr.join("");
  return newArr.toString();
}
