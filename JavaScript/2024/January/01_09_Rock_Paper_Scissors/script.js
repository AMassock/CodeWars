const rps = (p1, p2) => {
  let p1Won = "Player 1 won!";
  let p2Won = "Player 2 won!";
  let draw = "Draw!";

  if (p1 === "rock") {
    if (p2 === "scissors") {
      return p1Won;
    } else if (p2 === "paper") {
      return p2Won;
    } else if (p2 === "rock") {
      return draw;
    }
  }
  if (p1 === "paper") {
    if (p2 === "rock") {
      return p1Won;
    } else if (p2 === "scissors") {
      return p2Won;
    } else if (p2 === "paper") {
      return draw;
    }
  }
  if (p1 === "scissors") {
    if (p2 === "paper") {
      return p1Won;
    } else if (p2 === "rock") {
      return p2Won;
    } else if (p2 === "scissors") {
      return draw;
    }
  }
};
