// Original code
// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

// Solution
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}
