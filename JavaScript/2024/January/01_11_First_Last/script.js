function removeChar(str) {
  //You got this!
  let strArr = str.split(""); // Turn str into an array
  strArr.shift(); // remove the first item in the array
  strArr.pop(); // remove the last item in the array

  let newStr = strArr.join(""); // join the modified array with no separator

  return newStr; // return the new string
}
