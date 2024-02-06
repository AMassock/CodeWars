function invert(array) {
  let newArr = [];
  array.forEach((e) => {
    let maths = e * -1;
    newArr.push(maths);
    return maths;
  });
  return newArr;
}
