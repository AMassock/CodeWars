var summation = function (num) {
  let i = 0;
  let sum = 0;

  while (i <= num) {
    add = sum += i;
    i++;
  }
  return add;
};
