function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((acc, curr) => acc + curr, 0);
  let average = Math.floor(sum / marks.length);

  return average;
}
