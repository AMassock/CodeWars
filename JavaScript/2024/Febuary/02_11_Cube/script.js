function cubeChecker(volume, side) {
  if ((volume || side) <= 0) {
    return false;
  } else {
    return volume == side ** 3;
  }
}
