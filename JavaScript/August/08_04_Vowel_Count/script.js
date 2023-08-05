function getCount(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");
  let count = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (i in vowel) {
      count++;
    }
  }

  return count;
}
