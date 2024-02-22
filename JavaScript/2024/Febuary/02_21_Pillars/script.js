function pillars(numPill, dist, width) {
  // your code here
  // find distance between first and last pillar
  // dist = (pillDist + pillWidth) * numPill
  return numPill > 1 ? (numPill - 1) * dist * 100 + (numPill - 2) * width : 0;
}
