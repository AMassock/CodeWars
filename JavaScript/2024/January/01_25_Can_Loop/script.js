function loop_size(node) {
  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  var a = node; // turtle
  var b = node; // rabbit

  do {
    a = a.getNext();
    b = b.getNext().getNext();
  } while (a != b);
  var count = 0;
  do {
    // The turtle and rabbit are now on the same node,
    // but we know that node is in a loop.  So now we
    // keep the turtle motionless and move the rabbit
    // until it finds the turtle again, counting the
    // nodes the rabbit visits in the mean time.
    ++count;
    b = b.getNext();
  } while (a != b);

  return count;
}

do {
  turtle = turtle.getNext();
  rabbit = rabbit.getNext().getNext();
} while (turtle != rabbit);
