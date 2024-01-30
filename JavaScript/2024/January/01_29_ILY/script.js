function howMuchILoveYou(nbPetals) {
  // your code
  const responses = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  // Adjusting number to fit within the range of responses
  const adjustedNumber = (nbPetals - 1) % responses.length;

  // Handling negative numbers
  const index =
    adjustedNumber >= 0 ? adjustedNumber : adjustedNumber + responses.length;

  return responses[index];
}
