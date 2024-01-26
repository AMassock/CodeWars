function loop_size(node) {
  var a = node;
  var b = node;

  do {
    a = a.getNext();
    b = b.getNext().getNext();
  } while (a != b);
  var count = 0;
  do {
    ++count;
    b = b.getNext();
  } while (a != b);

  return count;
}
