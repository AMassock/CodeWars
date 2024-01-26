decodeMorse = (morseCode) => {
  // Your code here
  // You can use MORSE_CODE[morse]
  return morseCode
    .split("   ") // get word code, 3 spaces apart
    .map(
      (word) =>
        word
          .split(" ") // get character code, 1 spaces apart
          .map((character) => MORSE_CODE[character]) // decode character
          .join("") // join characters to word
    )
    .join(" ") // add spaces between words
    .trim();
};
