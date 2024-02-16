function yearDays(year) {
  //your code here
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap || year == 0) {
    return `${year} has 366 days`;
  }
  return `${year} has 365 days`;
}
