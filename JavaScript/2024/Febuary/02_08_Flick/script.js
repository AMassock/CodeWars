function flickSwitch(arr) {
  let foundFlick = false;
  let newArr = [];
  arr.forEach((i) => {
    if (i === "flick") {
      foundFlick = !foundFlick;
    }
    newArr.push(!foundFlick);
  });
  return newArr;
}
