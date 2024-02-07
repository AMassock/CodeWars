function strCount(str, letter) {
  //code here
  let count = 0;
  Array.from(str).forEach((e) => {
    if (e == letter) {
      count += 1;
    }
  });
  return count;
}
