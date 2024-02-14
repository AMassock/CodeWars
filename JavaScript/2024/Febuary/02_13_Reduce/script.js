function grow(x) {
  let val = 1;
  x.forEach((i) => {
    val = val * i;
    return val;
  });
  return val;
}
