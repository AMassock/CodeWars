function points(games) {
  let points = 0;
  games.map((games) => {
    let arr = games.split(":");
    if (arr[0] > arr[1]) {
      return (points += 3);
    } else if (arr[0] < arr[1]) {
      return points;
    } else if (arr[0] == arr[1]) {
      return (points += 1);
    }
    return points;
  });
  return points;
}
